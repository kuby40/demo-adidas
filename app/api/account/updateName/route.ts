import { NextResponse } from "next/server";
import prisma from "../../../libs/primadb";
import getCurrentUser from "../../../actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { newName } = body;
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!newName) {
      return new NextResponse("Missing Info", { status: 400 });
    }
    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: newName,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "UPDATE_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
