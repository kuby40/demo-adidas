import { Product } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import getCurrentProduct from "./getCurrentProduct";

const getWishlist = async () => {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
        return []
    }
    const wishlist: Product[] = [];
    const promises = currentUser.favoriteIDs.map(async (param: string) => {
      const product = await getCurrentProduct(param);
      if (product) {
      wishlist.push(product)
    }          
    })
    await Promise.all(promises)
    return wishlist;
}

export default getWishlist;