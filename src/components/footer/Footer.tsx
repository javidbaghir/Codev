import { Link, useNavigate } from "react-router-dom";
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";

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
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Info Column */}
                    <div className="footer-column footer-about">
                        <div className="footer-logo">
                            <img src={CodevLogo} alt="Codev Logo" />
                        </div>
                        <p className="footer-description">
                            {t("footer.description") || "Empowering the next generation of IT professionals with industry-leading training and certification programs."}
                        </p>
                        {/* Social Links */}
                        <div className="footer-social">
                            <Link
                                to="https://www.instagram.com/codev.az/"
                                target="_blank"
                                className="footer-social-link"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="https://www.facebook.com/people/Codevaz/61558664486344/"
                                target="_blank"
                                className="footer-social-link"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="https://www.linkedin.com"
                                target="_blank"
                                className="footer-social-link"
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                to="https://web.telegram.org/k/#-4511193316"
                                target="_blank"
                                className="footer-social-link"
                            >
                                <FaTelegram />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">{t("footer.quickLinks") || "Quick Links"}</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/" className="footer-link">
                                    <ArrowRight size={16} />
                                    <span>{t("header.home")}</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick("courses")} className="footer-link">
                                    <ArrowRight size={16} />
                                    <span>{t("header.courses")}</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick("teachers")} className="footer-link">
                                    <ArrowRight size={16} />
                                    <span>{t("header.teachers")}</span>
                                </button>
                            </li>
                            <li>
                                <Link to="/about" className="footer-link">
                                    <ArrowRight size={16} />
                                    <span>{t("header.about")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="footer-link">
                                    <ArrowRight size={16} />
                                    <span>{t("header.contact")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">{t("footer.contactInfo") || "Contact Info"}</h3>
                        <ul className="footer-contact">
                            <li className="footer-contact-item">
                                <Phone size={18} />
                                <div>
                                    <span className="footer-contact-label">{t("footer.phone") || "Phone"}:</span>
                                    <a href="tel:+994501234567" className="footer-contact-value">+994 51-765-46-26</a>
                                </div>
                            </li>
                            <li className="footer-contact-item">
                                <Mail size={18} />
                                <div>
                                    <span className="footer-contact-label">{t("footer.email") || "Email"}:</span>
                                    <a href="mailto:info@codev.az" className="footer-contact-value">info@codev.az</a>
                                </div>
                            </li>
                            <li className="footer-contact-item">
                                <MapPin size={18} />
                                <div>
                                    <span className="footer-contact-label">{t("footer.address") || "Address"}:</span>
                                    <span className="footer-contact-value">Baku, Azerbaijan</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 Codev. {t("footer.rights") || "All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
