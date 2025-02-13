import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "./footer/Footer";

const MainLayout = () => {

  return (
    <>
      <div className="container mx-auto flex flex-col min-h-screen" id="mainPage">
        <Header />
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;