import { Link, useNavigate } from "react-router-dom";
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLinkClick = (targetId: string) => {
        navigate("/");
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <footer className="relative pt-20 pb-8 px-4 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] to-[#050510]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info Column */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="w-32">
                            <img src={CodevLogo} alt="Codev Logo" className="w-full h-auto" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("footer.description") || "Empowering the next generation of IT professionals with industry-leading training and certification programs."}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <Link
                                to="https://www.instagram.com/codev.az/"
                                target="_blank"
                                className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#ec4899] hover:neon-shadow transition-all duration-300 group"
                            >
                                <FaInstagram className="group-hover:text-[#ec4899] transition-colors duration-300" />
                            </Link>
                            <Link
                                to="https://www.facebook.com/people/Codevaz/61558664486344/"
                                target="_blank"
                                className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#6366f1] hover:neon-shadow transition-all duration-300 group"
                            >
                                <FaFacebook className="group-hover:text-[#6366f1] transition-colors duration-300" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com"
                                target="_blank"
                                className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#14b8a6] hover:neon-shadow transition-all duration-300 group"
                            >
                                <FaLinkedin className="group-hover:text-[#14b8a6] transition-colors duration-300" />
                            </Link>
                            <Link
                                to="https://web.telegram.org/k/#-4511193316"
                                target="_blank"
                                className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#6366f1] hover:neon-shadow transition-all duration-300 group"
                            >
                                <FaTelegram className="group-hover:text-[#6366f1] transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-6 animate-fade-in-up animation-delay-200">
                        <h3 className="text-xl font-bold gradient-text">
                            {t("footer.quickLinks") || "Quick Links"}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                >
                                    <ArrowRight size={16} className="text-[#6366f1] group-hover:text-[#ec4899] transition-colors duration-300" />
                                    <span>{t("header.home")}</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick("courses")}
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                >
                                    <ArrowRight size={16} className="text-[#6366f1] group-hover:text-[#ec4899] transition-colors duration-300" />
                                    <span>{t("header.courses")}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick("teachers")}
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                >
                                    <ArrowRight size={16} className="text-[#6366f1] group-hover:text-[#ec4899] transition-colors duration-300" />
                                    <span>{t("header.teachers")}</span>
                                </button>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                >
                                    <ArrowRight size={16} className="text-[#6366f1] group-hover:text-[#ec4899] transition-colors duration-300" />
                                    <span>{t("header.about")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                >
                                    <ArrowRight size={16} className="text-[#6366f1] group-hover:text-[#ec4899] transition-colors duration-300" />
                                    <span>{t("header.contact")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="space-y-6 animate-fade-in-up animation-delay-400 lg:col-span-2">
                        <h3 className="text-xl font-bold gradient-text">
                            {t("footer.contactInfo") || "Contact Info"}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#6366f1] group-hover:neon-shadow transition-all duration-300">
                                    <Phone size={18} className="text-[#6366f1]" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block mb-1">
                                        {t("footer.phone") || "Phone"}
                                    </span>
                                    <a
                                        href="tel:+994517654626"
                                        className="text-white hover:gradient-text transition-all duration-300 font-medium"
                                    >
                                        +994 51-765-46-26
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#ec4899] group-hover:neon-shadow transition-all duration-300">
                                    <Mail size={18} className="text-[#ec4899]" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block mb-1">
                                        {t("footer.email") || "Email"}
                                    </span>
                                    <a
                                        href="mailto:info@codev.az"
                                        className="text-white hover:gradient-text transition-all duration-300 font-medium"
                                    >
                                        info@codev.az
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg glass-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#14b8a6] group-hover:neon-shadow transition-all duration-300">
                                    <MapPin size={18} className="text-[#14b8a6]" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block mb-1">
                                        {t("footer.address") || "Address"}
                                    </span>
                                    <span className="text-white font-medium">
                                        Baku, Azerbaijan
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 mt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2025 Codev. {t("footer.rights") || "All rights reserved."}
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            Made with <Heart size={16} className="text-[#ec4899] animate-pulse" /> by Codev Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
