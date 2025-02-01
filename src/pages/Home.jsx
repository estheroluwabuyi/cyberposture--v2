import NavBar from "../components/NavBar";
import ScheduleBtn from "../components/ScheduleBtn";

function Home() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <h2 className="hero-heading">LET’S HELP YOU STAY</h2>

        <ul className="hero-dynamic-texts">
          <li>
            <span>Complaint.</span>
          </li>
          <li>
            <span>Protected.</span>
          </li>
          <li>
            <span>Secured.</span>
          </li>
          <li>
            <span>Complaint.</span>
          </li>
        </ul>

        <p className="hero-texts">
          Expert Cybersecurity Solutions Tailored to Protect Your Organization
          from Emerging Threats
        </p>

        <div className="hero-btns">
          <ScheduleBtn btnPrimary="btnPrimary" className="action-btn">
            Schedule a Call
          </ScheduleBtn>

          <ScheduleBtn
            btnPrimary="btnPrimary"
            className="special-btn action-btn"
          >
            Get a Quote
          </ScheduleBtn>
        </div>
      </div>
    </>
  );
}

export default Home;
