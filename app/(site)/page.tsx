import LargeTileProductShowcase from "../components/UI/tiles/LargeTileProductShowcase";
import ShowcaseVideoFrontPage from "../components/UI/ShowcaseVideoFrontPage";
import FirstCustomerSee from "../components/UI/FirstCustomerSee";
import ScrollingSmallTiles from "../components/UI/tiles/ScrollingSmallTiles";
import ScrollingLargeTiles from "../components/UI/tiles/ScrollingLargeTiles";
import PopularRightNow from "../components/UI/PopularRightNow";
import CompanyStory from "../components/UI/CompanyStory";
import getMostBoughtProducts from "../actions/getMostBoughtProducts";
import getShowcaseProducts from "../actions/getShowcaseProducts";
import getCurrentProduct from "../actions/getCurrentProduct";
import getCurrentUser from "../actions/getCurrentUser";

const Home = async () => {
  const showcaseProductsLargeTiles = await getShowcaseProducts();
  const mostBoughtProductsShowcase = await getMostBoughtProducts();
  const currentUser = await getCurrentUser();

  return (
    <div>
      <FirstCustomerSee />
      <ShowcaseVideoFrontPage/>
      <LargeTileProductShowcase productsList={showcaseProductsLargeTiles} />
      <ScrollingSmallTiles productsList={mostBoughtProductsShowcase} currentUser={currentUser} />
      <ScrollingLargeTiles />
      <PopularRightNow />
      <CompanyStory />
    </div>
  );
};

export default Home;
