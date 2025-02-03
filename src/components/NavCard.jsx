import NavBarLinks from "./NavBarLinks";
import ScheduleBtn from "./ScheduleBtn";

function NavCard({ slide, handleSlideMenu }) {
  return (
    <section className={`nav-card ${slide ? "slide-down" : "slide-up"}`}>
      <button className="nav-bar-menu nav-bar-close" onClick={handleSlideMenu}>
        <img src="close.png" alt="close bar" />
      </button>
      <NavBarLinks />

      <ScheduleBtn scheduleBtn="scheduleBtn" btnPrimary="btnPrimary">
        Schedule
      </ScheduleBtn>
    </section>
  );
}

export default NavCard;
