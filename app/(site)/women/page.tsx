import FirstCustomerSee from "../../components/UI/FirstCustomerSee";
import ScrollingLargeTiles from "../../components/UI/tiles/ScrollingLargeTiles";
import ScrollingSmallTiles from "../../components/UI/tiles/ScrollingSmallTiles";
import LargeTileProductShowcase from "../../components/UI/tiles/LargeTileProductShowcase";
import PageDescriptionModal from "../../components/models/PageDescriptionModal";
import prisma from '../../libs/primadb'
const WomenPage = async () => {
  const showcaseProductsLargeTiles = await prisma.product.findMany({
    where: {
      showcase: true,
    },
  });
  const showcaseProductsSmallTiles = await prisma.product.findMany({
    take: 10,
    where: {
      unitsSold: {
        gte: 250,
      },
    },
  });
  return (
    <div>
      <FirstCustomerSee />
      <LargeTileProductShowcase productsList={showcaseProductsLargeTiles} />
      <ScrollingLargeTiles />
      <ScrollingSmallTiles productsList={showcaseProductsSmallTiles} />
      <PageDescriptionModal
        title="WOMEN'S CLOTHING & SHOES"
        description="In sport and in life, creators aren’t content on the sidelines. adidas
          women’s shoes and apparel are made for those who understand that rules
          can be negotiated; expectations, evolved. Reach for a new personal
          best in apparel made of specialized performance fabrics. Accentuate
          your personal style in sport-inspired sneakers for your day-to-day.
          Whether sport is your life or you’re an athleisure fashionista,
          women’s clothing and footwear from adidas exist to help you redefine
          what’s possible."
      />
    </div>
  );
};

export default WomenPage;
