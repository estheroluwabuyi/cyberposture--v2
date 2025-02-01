import SectionHeading from "./SectionHeading";

function SectorOverview() {
  return (
    <section className="sector-overview">
      <SectionHeading>catering for all industries</SectionHeading>

      <div className="sector-overview-list">
        <div className="sector-overview-slider">
          <p className="sector-overview-slider-item slider-circle">Banks</p>
          <p className="sector-overview-slider-item slider-circle">
            Government
          </p>
          <p className="sector-overview-slider-item slider-circle">IT</p>
          <p className="sector-overview-slider-item ">Fintech</p>
        </div>
      </div>
    </section>
  );
}

export default SectorOverview;
