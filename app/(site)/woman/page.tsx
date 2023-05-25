import FirstCustomerSee from "../../components/UI/FirstCustomerSee";
import ScrollingLargeTiles from "../../components/UI/ScrollingLargeTiles";
import ScrollingSmallTiles from "../../components/UI/ScrollingSmallTiles";
import LargeTileProductShowcase from '../../components/UI/LargeTileProductShowcase'
import PageDescriptionModal from '../../components/models/PageDescriptionModal'
const WomanPage = () => {
  return (
    <div>
      <FirstCustomerSee />
      <LargeTileProductShowcase/>
      <ScrollingLargeTiles />
      <ScrollingSmallTiles />
      <PageDescriptionModal
      title="WOMANS'S CLOTHING & SHOES"
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

export default WomanPage;
