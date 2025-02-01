import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";
import ScheduleBtn from "./ScheduleBtn";

function NavBar() {
  return (
    <section className="nav-bar">
      <Logo />
      <NavBarLinks />
      <ScheduleBtn scheduleBtn="scheduleBtn" btnPrimary="btnPrimary">
        Schedule
      </ScheduleBtn>
    </section>
  );
}

export default NavBar;
