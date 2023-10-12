import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../libs/primadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing Info", { status: 400 });
    } else {
      password = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return NextResponse.json(user);
    }
  } catch (error: any) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
