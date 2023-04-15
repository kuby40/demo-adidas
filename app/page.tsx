import FourTileProductShowcase from "./components/UI/FourTileProductShowcase";
import ShowcaseVideoFrontPage from "./components/UI/ShowcaseVideoFrontPage";
import FirstCustomerSee from "./components/UI/FirstCustomerSee";
import ScrollingSmallTiles from "./components/UI/ScrollingSmallTiles";
import ScrollingLargeTiles from "./components/UI/ScrollingLargeTiles";
import PopularRightNow from "./components/UI/PopularRightNow";
import CompanyStory from "./components/UI/CompanyStory";
const Home = () => {
  return (
    <div> 
      <FirstCustomerSee/>
      <ShowcaseVideoFrontPage/>
      <FourTileProductShowcase />
      <ScrollingSmallTiles />
      <ScrollingLargeTiles />
      <PopularRightNow />
      <CompanyStory />    
    </div>
  );
}

export default Home;