import LargeTileProductShowcase from "../components/UI/LargeTileProductShowcase";
import ShowcaseVideoFrontPage from "../components/UI/ShowcaseVideoFrontPage";
import FirstCustomerSee from "../components/UI/FirstCustomerSee";
import ScrollingSmallTiles from "../components/UI/ScrollingSmallTiles";
import ScrollingLargeTiles from "../components/UI/ScrollingLargeTiles";
import PopularRightNow from "../components/UI/PopularRightNow";
import CompanyStory from "../components/UI/CompanyStory";

const Home = () => {
  return (
    <div>
      <FirstCustomerSee />
      <LargeTileProductShowcase />
      <ScrollingSmallTiles />
      <ScrollingLargeTiles />
      <PopularRightNow />
      <CompanyStory />
    </div>
  );
};

export default Home;
