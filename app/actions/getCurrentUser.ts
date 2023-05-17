import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";
import prisma from '../libs/primadb'
import { getSession } from 'next-auth/react';

export async function getServer() { 
    return await getServerSession(authOptions)
}
    
export default async function getCurrentUser() {
    try {
        const session = await getSession();
        console.log(session)
        if (!session?.user?.email) {
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if (!currentUser) {
            return null;
        }
        return currentUser;
    } catch (error: any) {
        return null;
    }
}