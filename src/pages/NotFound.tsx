import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


const NotFound = () => {

    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center space-y-[40px] mt-[80px]">
            <p className="text-[100px] text-green-500">404</p>
            <div className="space-y-5 flex flex-col items-center justify-center">
                <h1 className="text-[38px] text-gray-500 text-center">{t("notFound.title")}</h1>
                <p className="text-gray-500 text-[18px]">{t("notFound.message")}</p>
            </div>

            <Link to={"/"} className="bg-green-500 px-4 py-2 text-white rounded-full font-medium">{t("notFound.btn")}</Link>
        </div>
    )
}

export default NotFound