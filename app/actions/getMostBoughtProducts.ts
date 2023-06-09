import { Product } from '@prisma/client';
import prisma from '../libs/primadb';
const getMostBoughtProducts = async () => {
    const data: Product[] = await prisma.product.findMany({
      take: 10,
      where: {
        unitsSold: {
          gte: 250,
        },
      },
    });
    return data;
}

export default getMostBoughtProducts;
