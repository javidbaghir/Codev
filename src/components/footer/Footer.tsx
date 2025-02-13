import { Link, useNavigate } from "react-router-dom"
import CodevLogo from "../../assets/logo/Codev_Logo_PNG.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"
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
        <footer>
            <hr className="mb-50px" />
            <div className="flex flex-col justify-between items-center gap-7 px-[70px] py-[50px]">
                <figure className="w-[143px] h-[50px]">
                    <img className="size-full object-cover" src={CodevLogo} alt="" />
                </figure>

                <div className="flex items-center gap-3 text-[25px]">
                    <Link target="blank" to={"https://www.instagram.com/codev.az/"}><FaInstagram /></Link>
                    <Link target="blank" to={"https://www.facebook.com/people/Codevaz/61558664486344/"}><FaFacebook /></Link>
                    <Link target="blank" to={"https://www.instagram.com/codev.az/"}><FaLinkedin /></Link>
                    <Link target="blank" to={"https://web.telegram.org/k/#-4511193316"}><FaTelegram /></Link>
                </div>

                <div className="flex items-center gap-4 flex-col sm:flex-row sm:items-center sm:gap-4">
                    <Link className="navbar-link" to={"/"}> {t("header.home")}</Link>
                    <button
                        onClick={() => handleLinkClick("courses")}
                        className="navbar-link"
                    >
                        {t("header.courses")}
                    </button>
                    <button
                        onClick={() => handleLinkClick("teachers")}
                        className="navbar-link"
                    >
                        {t("header.teachers")}
                    </button>
                    <Link className="navbar-link" to={"/about"}> {t("header.about")}</Link>
                    <Link className="navbar-link" to={"/contact-us"}> {t("header.contact")}</Link>
                </div>

            </div>
            <hr className="mb-[50px]" />
        </footer>
    )
}

export default Footer