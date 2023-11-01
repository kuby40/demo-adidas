import { NextResponse } from "next/server";
import prisma from "../../../libs/primadb";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const inputValue = searchParams.get('find')
    try {
        if (inputValue != undefined) {
            const foundProducts = await prisma.product.findMany({
                where: {
                    name: {
                        contains: inputValue,
                        mode: 'insensitive'
                    },
                },
            },)
            return Response.json(foundProducts)
        }
    } catch (error: any) {
        console.log(error, "GET_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}
