import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Service from "../pages/Service";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Schedule from "../pages/Schedule";
import NoPage from "../pages/NoPage";
import Layout from "./Layout";
import Footer from "./Footer";

function AppContent() {
  const location = useLocation();
  const showMain = location.pathname === "/" || location.pathname === "/home";

  return (
    <div>
      <Header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Header>
      {showMain && <Layout />}
    </div>
  );
}

/*
// function Footer() {
//   return (
//     <div className="footer">
//       {/* <a href="#contact"></a> 
//       <p>© {new Date().getFullYear()} CyberPosture. All rights reserved.</p>
//     </div>
//   );
// }

// export default Footer;
*/
export default AppContent;
