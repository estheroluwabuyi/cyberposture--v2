import ScheduleBtn from "./ScheduleBtn";

function CTA() {
  return (
    <div className="cta">
      <div className="cta-body">
        <h3 className="cta-title">Get started. It's easy</h3>
        <p className="cta-texts">
          Everything you need to to remain cybersecurity compliant is just a
          call away.
        </p>
        <ScheduleBtn btnPrimary="btnPrimary" className="action-btn">
          Schedule a Call
        </ScheduleBtn>
      </div>
    </div>
  );
}

export default CTA;
