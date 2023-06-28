
import prisma from "../libs/primadb";


const getCurrentProduct = async (idToFind: string) => {
try {
    const product = await prisma.product.findUnique({
      where: {
        id: idToFind
      },
    });
    return product;
} catch (error: any) {
    return null;
  }
};

export default getCurrentProduct;