import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png";
import { useTranslation } from "react-i18next";
import "../header/css/HeaderCss.css";

const Header = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLinkClick = (targetId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1060) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex justify-between items-center px-4 py-6 relative">
      <Link to={"/"} className="logo-link">
        <figure className="w-[134px] h-[46px]">
          <img src={CodevLogo} alt="Codev Logo" className="size-full object-cover" />
        </figure>
      </Link>

      <div className="flex items-center gap-4">
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <Link
            to={"/"}
            className={`navbar-link ${location.pathname === "/" ? "bg-green-500 text-white rounded-full" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t("header.home")}
          </Link>
          <button
            onClick={() => handleLinkClick("courses")}
            className={`navbar-link ${location.hash === "#courses" ? "active" : ""}`}
          >
            {t("header.courses")}
          </button>
          <button
            onClick={() => handleLinkClick("teachers")}
            className={`navbar-link ${location.hash === "#teachers" ? "active" : ""}`}
          >
            {t("header.teachers")}
          </button>
          <Link
            to={"/about"}
            className={`navbar-link ${location.pathname === "/about" ? "bg-green-500 text-white rounded-full" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t("header.about")}
          </Link>
          <Link
            to={"/contact-us"}
            className={`navbar-link ${location.pathname === "/contact-us" ? "bg-green-500 text-white rounded-full" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t("header.contact")}
          </Link>
        </div>

        <div className="language-selector">
          <select id="lang" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="az">Azərbaycan</option>
          </select>
        </div>

        <button
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>
    </header>
  );
};

export default Header;