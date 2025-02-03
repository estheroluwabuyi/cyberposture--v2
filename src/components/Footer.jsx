import FooterApps from "./FooterApps";
import FooterCases from "./FooterCases";
import FooterExplore from "./FooterExplore";
import FooterResources from "./FooterResources";

function Footer() {
  return (
    <section className="footer" id="contact">
      <div className="footer-list">
        <FooterApps />
        <div className="footer-list-lists">
          <FooterCases />
          <FooterExplore />
          <FooterResources />
        </div>

        <div className="footer-list-img">
          <img src="cyber-logo.png" alt="cyberposture" />
        </div>
      </div>

      <div className="footer-img">
        <img src="cyber-logo-footer.png" alt="cyberposture" />
      </div>
    </section>
  );
}

export default Footer;
