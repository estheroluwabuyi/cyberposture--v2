import { useState } from "react";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";
import ScheduleBtn from "./ScheduleBtn";
import NavBanner from "./NavBanner";
import NavCard from "./NavCard";

function NavBar() {
  const [slide, setSlide] = useState(false);

  function handleSlideMenu() {
    setSlide(!slide);
  }

  return (
    <div>
      <NavBanner handleSlideMenu={handleSlideMenu} />

      <NavCard slide={slide} handleSlideMenu={handleSlideMenu} />

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
