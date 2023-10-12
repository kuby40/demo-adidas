import { NextResponse } from "next/server";
import prisma from "../../../libs/primadb";
import getCurrentUser from "../../../actions/getCurrentUser";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { currentPassword, newPassword } = body;
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!newPassword || !currentPassword) {
      return new NextResponse("Missing Info", {status: 400, statusText: 'Missing Info' });
    }
    const isCorrectPassword = await bcrypt.compare(
      currentPassword,
      currentUser.password!
    );
    if (!isCorrectPassword) {
      return new NextResponse("Incorrect Information", {status: 400});
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        password: hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "UPDATE_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
