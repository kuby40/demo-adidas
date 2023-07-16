import { NextResponse } from "next/server";
import prisma from "../../libs/primadb";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const data = await request.text();
    if (!currentUser) {
      return new NextResponse("Must Be Logged in to add To Favorites", {
        status: 401,
      });
    } else {
      const likedPosts = await prisma.user.findUnique({
        where: {
          id: currentUser.id,
        },
        select: {
          favoriteIDs: true,
        },
      });
      if (likedPosts?.favoriteIDs.includes(data, 0)) {
        const favoriteToRemove = likedPosts.favoriteIDs.indexOf(data);
        likedPosts.favoriteIDs.splice(favoriteToRemove, 1);
        const user = await prisma.user.update({
          where: {
            id: currentUser.id,
          },
          data: {favoriteIDs: likedPosts.favoriteIDs},
        });
        return NextResponse.json(user);
      } else {
        likedPosts?.favoriteIDs.push(data);
        const user = await prisma.user.update({
          where: {
            id: currentUser.id,
          },
          data: {
            favoriteIDs: likedPosts?.favoriteIDs,
          },
        });

        return NextResponse.json(user);
      }
    }
  } catch (error: any) {
    console.log(error, "UPDATE_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
