import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png";
import { Menu, X, Globe, GraduationCap, BookOpen, Phone, Users, Sparkles } from "lucide-react";
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
      setScrolled(window.scrollY > 50);
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

  const isActive = (path: string) => location.pathname === path;
  const currentLanguage = i18n.language === "az" ? "AZ" : "EN";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-glass py-3"
          : "bg-dark-950/50 backdrop-blur-md py-4"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              {/* <div className="relative bg-white/10 p-2 rounded-2xl border border-primary-500/30 group-hover:border-primary-500/60 transition-all duration-300">
                <img
                  src={CodevLogo}
                  alt="Codev Logo"
                  className="h-10 w-auto object-contain"
                />
              </div> */}
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-lg">Codev</span>
              <span className="text-xs text-slate-400 -mt-1">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                isActive("/")
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {isActive("/") && (
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
              )}
              <BookOpen size={18} className="relative" />
              <span className="relative font-medium">{t("header.home")}</span>
              {isActive("/") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full shadow-neon"></div>
              )}
            </Link>

            <button
              onClick={() => handleScrollLink("courses")}
              className="group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <GraduationCap size={18} />
              <span className="font-medium">{t("header.courses")}</span>
            </button>

            <button
              onClick={() => handleScrollLink("teachers")}
              className="group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Users size={18} />
              <span className="font-medium">{t("header.teachers")}</span>
            </button>

            <Link
              to="/about"
              className={`group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                isActive("/about")
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {isActive("/about") && (
                <div className="absolute inset-0 bg-gradient-secondary opacity-20 rounded-lg"></div>
              )}
              <Sparkles size={18} className="relative" />
              <span className="relative font-medium">{t("header.about")}</span>
              {isActive("/about") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-secondary rounded-full shadow-neon-pink"></div>
              )}
            </Link>

            <Link
              to="/contact-us"
              className={`group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                isActive("/contact-us")
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {isActive("/contact-us") && (
                <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-lg"></div>
              )}
              <Phone size={18} className="relative" />
              <span className="relative font-medium">{t("header.contact")}</span>
              {isActive("/contact-us") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-accent rounded-full shadow-neon-teal"></div>
              )}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg glass-light border border-white/10 hover:border-primary-500/50 transition-all duration-300"
              >
                <Globe size={18} className="text-primary-400 group-hover:rotate-12 transition-transform duration-500" />
                <span className="text-white font-semibold text-sm">{currentLanguage}</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 glass-dark rounded-xl border border-white/10 p-2 shadow-glass">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full px-3 py-2 rounded-lg text-left transition-all duration-200 flex items-center justify-between ${
                      i18n.language === "en"
                        ? "bg-gradient-primary text-white"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium text-sm">English</span>
                    {i18n.language === "en" && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage("az")}
                    className={`w-full px-3 py-2 rounded-lg text-left transition-all duration-200 flex items-center justify-between mt-1 ${
                      i18n.language === "az"
                        ? "bg-gradient-primary text-white"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium text-sm">Azərbaycan</span>
                    {i18n.language === "az" && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg glass-light border border-white/10 hover:border-primary-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-6 glass-dark rounded-2xl border border-white/10 p-4 shadow-glass">
            <nav className="flex flex-col gap-2 mb-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/")
                    ? "bg-gradient-primary text-white shadow-neon"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <BookOpen size={20} />
                <span className="font-semibold">{t("header.home")}</span>
              </Link>

              <button
                onClick={() => handleScrollLink("courses")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 transition-all duration-300 text-left"
              >
                <GraduationCap size={20} />
                <span className="font-semibold">{t("header.courses")}</span>
              </button>

              <button
                onClick={() => handleScrollLink("teachers")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 transition-all duration-300 text-left"
              >
                <Users size={20} />
                <span className="font-semibold">{t("header.teachers")}</span>
              </button>

              <Link
                to="/about"
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/about")
                    ? "bg-gradient-secondary text-white shadow-neon-pink"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <Sparkles size={20} />
                <span className="font-semibold">{t("header.about")}</span>
              </Link>

              <Link
                to="/contact-us"
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/contact-us")
                    ? "bg-gradient-accent text-white shadow-neon-teal"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <Phone size={20} />
                <span className="font-semibold">{t("header.contact")}</span>
              </Link>
            </nav>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Globe size={16} className="text-primary-400" />
                <p className="text-sm text-slate-400 font-semibold">
                  {t("header.language")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    closeMenu();
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    i18n.language === "en"
                      ? "bg-gradient-primary text-white shadow-neon"
                      : "text-slate-300 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    changeLanguage("az");
                    closeMenu();
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    i18n.language === "az"
                      ? "bg-gradient-primary text-white shadow-neon"
                      : "text-slate-300 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Azərbaycan
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
