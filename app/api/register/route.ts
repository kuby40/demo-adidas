import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../libs/primadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { email, firstName, lastName, password } = body;

    if (!email || !firstName || !lastName || !password) {
      return new NextResponse("Missing Info", { status: 400 });
    }

    password = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
      console.log(error, "REGISTRATION_ERROR");
      return new NextResponse('Internal Error', {status: 500} )
  }
}
