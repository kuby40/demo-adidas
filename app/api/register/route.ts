import bcrypt from 'bcrypt'
import prisma from '../../libs/primadb';
import {NextResponse} from 'next/server'

export async function POST(
    request: Request
) {
    const body = await request.json();
    console.log(body)
    // let {
    //     email, firstName, lastName, password
    // } = body;

    // password = await bcrypt.hash(password, 12);
    // const user = await prisma.user.create({
    //     data: {
    //         email,
    //         firstName,
    //         lastName,
    //         password,
    //     }
    // })

    // return NextResponse.json(user);
}