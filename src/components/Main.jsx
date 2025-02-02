import AboutLayout from "./AboutLayout";
import Brands from "./Brands";
import SectorOverview from "./SectorOverview";
import ServiceLayout from "./ServiceLayout";
import Reviews from "./Reviews";

function Main() {
  return (
    <div className="main">
      <SectorOverview />
      <Brands />
      <AboutLayout />
      <ServiceLayout />
      <Reviews />
    </div>
  );
}

export default Main;
