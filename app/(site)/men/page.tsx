import FirstCustomerSee from "../../components/UI/FirstCustomerSee";
import ScrollingLargeTiles from "../../components/UI/ScrollingLargeTiles";
import ScrollingSmallTiles from "../../components/UI/tiles/ScrollingSmallTiles";
import LargeTileProductShowcase from "../../components/UI/LargeTileProductShowcase";
import PageDescriptionModal from "../../components/models/PageDescriptionModal";
const MenPage = () => {
  return (
    <div>
      <FirstCustomerSee />
      <LargeTileProductShowcase />
      <ScrollingLargeTiles />
      <ScrollingSmallTiles />
      <PageDescriptionModal
        title="MEN'S CLOTHING & SHOES"
        description="As a creator, you look for ways to excel and express yourself when
            and where you can, from reaching for that last rep to evolving your
            streetwear style. Log miles or tear down the baseline in men's shoes
            with responsive cushioning. Rep an athletic style off the field in
            lifestyle apparel born of sport heritage. From athletes to
            streetwear enthusiasts, adidas men’s clothing and shoes exist to let
            you go harder, dig deeper, and get the most out of yourself, from
            the pitch to the street to the road less traveled."
      />
    </div>
  );
};

export default MenPage;
