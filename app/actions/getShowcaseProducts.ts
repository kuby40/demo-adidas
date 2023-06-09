import { Product } from "@prisma/client";
import prisma from "../libs/primadb";
const getShowcaseProducts = async () => {
  const data: Product[] = await prisma.product.findMany({
    where: {
      showcase: true,
    },
  });
  return data;
};

export default getShowcaseProducts;
