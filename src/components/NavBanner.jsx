import Logo from "./Logo";

function NavBanner({ handleSlideMenu }) {
  return (
    <div>
      <section className="nav-banner">
        <Logo />

        <button className="nav-bar-menu" onClick={handleSlideMenu}>
          <img src="menu.png" alt="menu bar" />
        </button>
      </section>
    </div>
  );
}

export default NavBanner;
