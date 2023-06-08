import LargeTileProductShowcase from "../components/UI/tiles/LargeTileProductShowcase";
import ShowcaseVideoFrontPage from "../components/UI/ShowcaseVideoFrontPage";
import FirstCustomerSee from "../components/UI/FirstCustomerSee";
import ScrollingSmallTiles from "../components/UI/tiles/ScrollingSmallTiles";
import ScrollingLargeTiles from "../components/UI/tiles/ScrollingLargeTiles";
import PopularRightNow from "../components/UI/PopularRightNow";
import CompanyStory from "../components/UI/CompanyStory";
import prisma from "../libs/primadb";

const Home = async () => {
  const showcaseProductsLargeTiles = await prisma.product.findMany({
    where: {
      showcase: true,
    }
  });
  const showcaseProductsSmallTiles = await prisma.product.findMany({
    take: 10,
    where: {
      unitsSold: {
        gte: 250
      }
    },
  });
  

  return (
    <div>
      <FirstCustomerSee />
      <ShowcaseVideoFrontPage/>
      <LargeTileProductShowcase productsList={showcaseProductsLargeTiles} />
      <ScrollingSmallTiles productsList={showcaseProductsSmallTiles} />
      <ScrollingLargeTiles />
      <PopularRightNow />
      <CompanyStory />
    </div>
  );
};

export default Home;
