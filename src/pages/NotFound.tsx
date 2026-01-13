import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Home, AlertCircle, Sparkles } from "lucide-react"

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <div className="relative max-w-4xl mx-auto text-center space-y-12">
                {/* 404 Number */}
                <div className="relative animate-fade-in-up">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    </div>
                    <h1 className="relative text-[120px] md:text-[200px] lg:text-[280px] font-bold gradient-text leading-none">
                        404
                    </h1>
                </div>

                {/* Error Icon */}
                <div className="flex justify-center animate-fade-in-up animation-delay-200">
                    <div className="w-24 h-24 rounded-full glass-dark border border-white/10 flex items-center justify-center neon-shadow">
                        <AlertCircle size={48} className="text-[#ec4899]" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6 animate-fade-in-up animation-delay-400">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#14b8a6] animate-pulse" />
                        <span className="px-4 py-2 rounded-full glass-light border border-white/20 text-sm font-semibold text-white inline-flex items-center gap-2">
                            Page Not Found
                        </span>
                        <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {t("notFound.title") || "Oops! Page Not Found"}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        {t("notFound.message") || "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
                    </p>
                </div>

                {/* Back to Home Button */}
                <div className="animate-fade-in-up animation-delay-600">
                    <div className="group relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <Link
                            to="/"
                            className="relative px-8 py-4 glass-dark rounded-full border border-white/20 text-white font-semibold inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                        >
                            <Home size={20} />
                            <span>{t("notFound.btn") || "Back to Home"}</span>
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in-up animation-delay-800">
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent"></div>
                    <Sparkles className="w-6 h-6 text-[#ec4899] animate-pulse" />
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ec4899] to-transparent"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound