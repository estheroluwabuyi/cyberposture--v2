import AboutLayout from "./AboutLayout";
import Brands from "./Brands";
import SectorOverview from "./SectorOverview";

function Main() {
  return (
    <div className="main">
      <SectorOverview />
      <Brands />
      <AboutLayout />
    </div>
  );
}

export default Main;
