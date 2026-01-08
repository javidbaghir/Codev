import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


const NotFound = () => {

    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center space-y-[50px] mt-[80px] md:mt-[120px] mb-[80px] md:mb-[120px] px-4">
            <div className="relative">
                <p className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-primary drop-shadow-lg">404</p>
                <div className="absolute inset-0 text-[120px] md:text-[180px] lg:text-[220px] font-bold text-primary-200 blur-sm -z-10">404</div>
            </div>
            <div className="space-y-6 flex flex-col items-center justify-center max-w-2xl">
                <h1 className="text-[32px] md:text-[42px] lg:text-[48px] text-secondary-800 text-center font-bold">{t("notFound.title")}</h1>
                <p className="text-secondary-600 text-[16px] md:text-[20px] text-center leading-relaxed">{t("notFound.message")}</p>
            </div>

            <Link
                to={"/"}
                className="bg-primary hover:bg-primary-600 px-8 py-4 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                {t("notFound.btn")}
            </Link>
        </div>
    )
}

export default NotFound