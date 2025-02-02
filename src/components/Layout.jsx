import AboutLayout from "./AboutLayout";
import Brands from "./Brands";
import SectorOverview from "./SectorOverview";
import ServiceLayout from "./ServiceLayout";
import Reviews from "./Reviews";
import Footer from "./Footer";
import CTA from "./CTA";

function Layout() {
  return (
    <div className="main">
      <SectorOverview />
      <Brands />
      <AboutLayout />
      <ServiceLayout />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

export default Layout;
