import { useRef } from "react";
import { ChevronLeft, ChevronRight, Award, TrendingUp, CheckCircle, Sparkles, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { successAz } from "../../database/SuccessAz";
import { successEn } from "../../database/SuccessEn";

const OurSuccess = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const { t, i18n } = useTranslation();
    const successStories = i18n.language === "az" ? successAz : successEn;

    const slideLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -350,
                behavior: "smooth",
            });
        }
    };

    const slideRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 350,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-6 animate-fade-in-up">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#14b8a6] animate-pulse" />
                        <span className="px-4 py-2 rounded-full glass-light border border-white/20 text-sm font-semibold text-white inline-flex items-center gap-2">
                            <Award size={16} className="text-[#6366f1]" />
                            {t("success.badge") || "Student Success"}
                        </span>
                        <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fade-in-up animation-delay-200">
                        {t("success.title") || "Success Stories"}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                        {t("success.subtitle") || "Certified professionals who started their journey with us"}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <button
                        onClick={slideLeft}
                        className="w-12 h-12 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#6366f1] hover:neon-shadow transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={slideRight}
                        className="w-12 h-12 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:border-[#6366f1] hover:neon-shadow transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Success Cards Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {successStories.map((student, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[320px] snap-center animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Neon Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500"></div>

                            <div className="relative glass-dark rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300">
                                {/* Certificate Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={student.img}
                                        alt={student.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent opacity-60"></div>

                                    {/* Checkmark Badge */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-[#14b8a6] to-[#6366f1] rounded-full flex items-center justify-center border-2 border-white/20 animate-pulse">
                                        <CheckCircle size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Student Info */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                                        {student.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {student.exam}
                                    </p>

                                    {/* Verified Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-light border border-white/10 text-sm font-semibold text-white">
                                        <Award size={14} className="text-[#14b8a6]" />
                                        <span>Certified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="group relative animate-fade-in-up animation-delay-200">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                        <div className="relative glass-dark p-8 rounded-2xl border border-white/10 hover:border-white/20 text-center space-y-4 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-2xl flex items-center justify-center neon-shadow">
                                <Trophy size={32} className="text-white" />
                            </div>
                            <div className="text-4xl font-bold gradient-text">
                                {successStories.length}+
                            </div>
                            <p className="text-gray-300 font-medium">
                                {t("success.certified") || "Certified Students"}
                            </p>
                        </div>
                    </div>

                    <div className="group relative animate-fade-in-up animation-delay-400">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ec4899] to-[#14b8a6] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                        <div className="relative glass-dark p-8 rounded-2xl border border-white/10 hover:border-white/20 text-center space-y-4 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ec4899] to-[#14b8a6] rounded-2xl flex items-center justify-center neon-shadow">
                                <TrendingUp size={32} className="text-white" />
                            </div>
                            <div className="text-4xl font-bold gradient-text">
                                95%
                            </div>
                            <p className="text-gray-300 font-medium">
                                {t("success.passRate") || "Pass Rate"}
                            </p>
                        </div>
                    </div>

                    <div className="group relative animate-fade-in-up animation-delay-600">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#14b8a6] to-[#6366f1] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                        <div className="relative glass-dark p-8 rounded-2xl border border-white/10 hover:border-white/20 text-center space-y-4 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#14b8a6] to-[#6366f1] rounded-2xl flex items-center justify-center neon-shadow">
                                <Award size={32} className="text-white" />
                            </div>
                            <div className="text-4xl font-bold gradient-text">
                                100%
                            </div>
                            <p className="text-gray-300 font-medium">
                                {t("success.jobReady") || "Job Ready"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default OurSuccess;
