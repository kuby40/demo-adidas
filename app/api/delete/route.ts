import { NextResponse } from "next/server";

import getCurrentUser from "../../actions/getCurrentUser";
import prisma from "../../libs/primadb";

export async function POST(request: Request) {
  try {
      const currentUser = await getCurrentUser();
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    await prisma.user.delete({
      where: {
        id: currentUser.id,
      },
    });
    return new NextResponse("Success", {status: 200});
  } catch (error) {
    console.log(error, "ERROR_MESSAGES");
    return new NextResponse("Error", { status: 500 });
  }
}
