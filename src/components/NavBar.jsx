import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";
import ScheduleBtn from "./ScheduleBtn";

function NavBar() {
  return (
    <div>
      <section className="nav-banner">
        <Logo />

        <button className="nav-bar-menu">
          <img src="menu.png" alt="menu bar" />
        </button>
      </section>

      <section className="nav-bar">
        <Logo />
        <NavBarLinks />
        <ScheduleBtn scheduleBtn="scheduleBtn" btnPrimary="btnPrimary">
          Schedule
        </ScheduleBtn>
      </section>
    </div>
  );
}

export default NavBar;
