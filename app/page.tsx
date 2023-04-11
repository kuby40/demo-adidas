'use client'
import { useRef } from "react";
import FourTileProductShowcase from "./components/UI/FourTileProductShowcase";
import ShowcaseVideoFrontPage from "./components/UI/ShowcaseVideoFrontPage";
import FirstCustomerSee from "./components/UI/FirstCustomerSee";
import Header from "./components/UI/Header";
import ScrollingSmallTiles from "./components/UI/ScrollingSmallTiles";
import ScrollingLargeTiles from "./components/UI/ScrollingLargeTiles";
import PopularRightNow from "./components/UI/PopularRightNow";
import CompanyStory from "./components/UI/CompanyStory";
import Footer from "./components/UI/Footer";
const Home = () => {

  const showcaseScrollable = useRef<HTMLDivElement>(null);
  
  return (
    <div>
      <Header/>
      <FirstCustomerSee/>
      <ShowcaseVideoFrontPage/>
      <FourTileProductShowcase />
      <ScrollingSmallTiles />
      <ScrollingLargeTiles />
      <PopularRightNow />
      <CompanyStory />
      <Footer />
      
      
    </div>
  );
}

export default Home;