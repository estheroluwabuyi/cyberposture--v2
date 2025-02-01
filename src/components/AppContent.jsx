import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Service from "../pages/Service";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Schedule from "../pages/Schedule";
import NoPage from "../pages/NoPage";
import Main from "./Main";

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
          <Route path="contact" element={<Contact />} />
          {/* <Route path="schedule" element={<Schedule />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Header>
      {showMain && <Main />} {/* Show Main only on Home */}
    </div>
  );
}

export default AppContent;
