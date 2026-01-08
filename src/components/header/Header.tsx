import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png";
import { Menu, X, Globe, ChevronDown, GraduationCap, BookOpen, Phone, Users } from "lucide-react";
import "./css/HeaderCss.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScrollLink = (targetId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const currentLanguage = i18n.language === "az" ? "AZ" : "EN";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-card py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="section-container">
        <div className="relative">
          {/* Premium Glass Background Accent */}
          {scrolled && (
            <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-5 rounded-3xl blur-2xl animate-pulse-glow"></div>
          )}

          <div className="flex items-center justify-between">
            {/* Logo with Premium Effect */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative z-10"
              onClick={closeMenu}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110"></div>

                {/* Logo Container */}
                <div className="relative bg-white p-1 rounded-2xl shadow-card group-hover:shadow-premium transition-all duration-500 group-hover:scale-105">
                  <img
                    src={CodevLogo}
                    alt="Codev Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Brand Tagline */}
              <div className="hidden sm:block">
                <p className="text-[10px] text-secondary-500 font-semibold tracking-wider uppercase">
                  Learn & Grow
                </p>
              </div>
            </Link>

            {/* Desktop Navigation with Icons */}
            <nav className="hidden lg:flex items-center gap-2">
              <Link
                to="/"
                className={`nav-link-premium group ${
                  isActive("/")
                    ? "nav-link-active"
                    : ""
                }`}
              >
                <BookOpen size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>{t("header.home")}</span>
                {isActive("/") && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>

              <button
                onClick={() => handleScrollLink("courses")}
                className="nav-link-premium group"
              >
                <GraduationCap size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>{t("header.courses")}</span>
              </button>

              <button
                onClick={() => handleScrollLink("teachers")}
                className="nav-link-premium group"
              >
                <Users size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>{t("header.teachers")}</span>
              </button>

              <Link
                to="/about"
                className={`nav-link-premium group ${
                  isActive("/about")
                    ? "nav-link-active"
                    : ""
                }`}
              >
                <GraduationCap size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>{t("header.about")}</span>
                {isActive("/about") && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>

              <Link
                to="/contact-us"
                className={`nav-link-premium group ${
                  isActive("/contact-us")
                    ? "nav-link-active"
                    : ""
                }`}
              >
                <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>{t("header.contact")}</span>
                {isActive("/contact-us") && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Premium Language Selector */}
              <div className="relative hidden lg:block">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="lang-selector-premium group"
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  <Globe size={18} className="group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                  <span className="font-semibold relative z-10">{currentLanguage}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 relative z-10 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangOpen && (
                  <div className="lang-dropdown-premium">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`lang-option-premium ${
                        i18n.language === "en" ? "lang-option-active" : ""
                      }`}
                    >
                      <span className="font-medium">English</span>
                      {i18n.language === "en" && (
                        <div className="w-2 h-2 rounded-full bg-gradient-primary shadow-glow"></div>
                      )}
                    </button>
                    <div className="h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent"></div>
                    <button
                      onClick={() => changeLanguage("az")}
                      className={`lang-option-premium ${
                        i18n.language === "az" ? "lang-option-active" : ""
                      }`}
                    >
                      <span className="font-medium">Azərbaycan</span>
                      {i18n.language === "az" && (
                        <div className="w-2 h-2 rounded-full bg-gradient-primary shadow-glow"></div>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Premium Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden mobile-menu-btn-premium group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                {isOpen ? (
                  <X size={24} className="text-secondary-700 group-hover:text-primary transition-all duration-300 relative z-10 group-hover:rotate-90" />
                ) : (
                  <Menu size={24} className="text-secondary-700 group-hover:text-primary transition-colors duration-300 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-6 mobile-menu-premium">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-2xl -z-10"></div>

            <nav className="flex flex-col gap-2 mb-6">
              <Link
                to="/"
                onClick={closeMenu}
                className={`mobile-nav-link-premium group ${
                  isActive("/") ? "mobile-nav-link-active" : ""
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <BookOpen size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t("header.home")}</span>
                </div>
                {isActive("/") && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>

              <button
                onClick={() => handleScrollLink("courses")}
                className="mobile-nav-link-premium group"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <GraduationCap size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t("header.courses")}</span>
                </div>
              </button>

              <button
                onClick={() => handleScrollLink("teachers")}
                className="mobile-nav-link-premium group"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t("header.teachers")}</span>
                </div>
              </button>

              <Link
                to="/about"
                onClick={closeMenu}
                className={`mobile-nav-link-premium group ${
                  isActive("/about") ? "mobile-nav-link-active" : ""
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <GraduationCap size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t("header.about")}</span>
                </div>
                {isActive("/about") && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>

              <Link
                to="/contact-us"
                onClick={closeMenu}
                className={`mobile-nav-link-premium group ${
                  isActive("/contact-us") ? "mobile-nav-link-active" : ""
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t("header.contact")}</span>
                </div>
                {isActive("/contact-us") && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
                )}
              </Link>
            </nav>

            {/* Mobile Language Selector with Premium Design */}
            <div className="pt-6 border-t border-secondary-200/50">
              <div className="flex items-center justify-between mb-4 px-2">
                <p className="text-sm text-secondary-500 font-semibold tracking-wide">
                  {t("header.language")}
                </p>
                <Globe size={16} className="text-primary" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    closeMenu();
                  }}
                  className={`mobile-lang-btn-premium ${
                    i18n.language === "en" ? "mobile-lang-btn-active" : ""
                  }`}
                >
                  <span className="font-semibold relative z-10">English</span>
                  {i18n.language === "en" && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-100 rounded-2xl"></div>
                  )}
                </button>
                <button
                  onClick={() => {
                    changeLanguage("az");
                    closeMenu();
                  }}
                  className={`mobile-lang-btn-premium ${
                    i18n.language === "az" ? "mobile-lang-btn-active" : ""
                  }`}
                >
                  <span className="font-semibold relative z-10">Azərbaycan</span>
                  {i18n.language === "az" && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-100 rounded-2xl"></div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
