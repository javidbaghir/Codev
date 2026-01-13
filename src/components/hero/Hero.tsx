import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Rocket, Sparkles, ChevronDown, Zap, Award, Target } from "lucide-react";
import { HERODATABASE } from "../../database/HeroDataBase";
import { useTranslation } from "react-i18next";
import "./css/HeroCss.css";
import "swiper/swiper-bundle.css";

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Slider with Blur */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    loop
                    speed={2000}
                    className="h-full w-full"
                >
                    {HERODATABASE.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Strong dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-950/98 via-dark-900/95 to-dark-950/98"></div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400 rounded-full animate-float-slow opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="w-full relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">

                    {/* Floating badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-primary-500/30 animate-fade-in-down">
                        <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
                        <span className="text-sm text-slate-200 font-medium">
                            {t("hero.badge") || "Premium IT Education Platform"}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
                    </div>

                    {/* Main heading with gradient text */}
                    <h1 className="max-w-5xl animate-fade-in-up">
                        <span className="block text-white mb-4">
                            {t("hero.mainTitle") || "Master Modern IT Skills"}
                        </span>
                        <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl font-bold">
                            With Codev Academy
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl text-lg md:text-xl text-slate-300 animate-fade-in-up animation-delay-200">
                        {t("hero.subtitle") || "Transform your career with industry-leading certifications. Learn from experts, get certified, and unlock limitless opportunities in the tech world."}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animation-delay-400">
                        <button className="group relative px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon">
                            <div className="absolute inset-0 bg-gradient-shine translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative flex items-center gap-2">
                                <Rocket className="w-5 h-5" />
                                {t("hero.startNow") || "Start Learning"}
                            </span>
                        </button>

                        <button className="group px-8 py-4 glass-light text-white rounded-xl font-semibold border border-white/20 transition-all duration-300 hover:border-secondary-400/50 hover:shadow-neon-pink">
                            <span className="flex items-center gap-2">
                                <Zap className="w-5 h-5 group-hover:text-secondary-400 transition-colors" />
                                {t("hero.exploreCourses") || "Explore Courses"}
                            </span>
                        </button>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mt-12 animate-fade-in-up animation-delay-600">
                        <div className="group glass-light rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-neon">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                                    <Target className="w-6 h-6 text-primary-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-white">100+</div>
                                    <div className="text-sm text-slate-400">{t("hero.students") || "Certified Students"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="group glass-light rounded-2xl p-6 border border-secondary-500/20 hover:border-secondary-500/50 transition-all duration-300 hover:shadow-neon-pink">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-secondary-500/20 group-hover:bg-secondary-500/30 transition-colors">
                                    <Award className="w-6 h-6 text-secondary-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-white">95%</div>
                                    <div className="text-sm text-slate-400">{t("hero.success") || "Success Rate"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="group glass-light rounded-2xl p-6 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 hover:shadow-neon-teal">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-accent-500/20 group-hover:bg-accent-500/30 transition-colors">
                                    <Sparkles className="w-6 h-6 text-accent-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-white">10+</div>
                                    <div className="text-sm text-slate-400">{t("hero.courses") || "Expert Courses"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-400 animate-fade-in animation-delay-800">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center">
                                <span className="text-accent-400 text-xs">✓</span>
                            </div>
                            <span>{t("hero.certified") || "Industry Certified"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center">
                                <span className="text-accent-400 text-xs">✓</span>
                            </div>
                            <span>{t("hero.experts") || "Expert Instructors"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center">
                                <span className="text-accent-400 text-xs">✓</span>
                            </div>
                            <span>{t("hero.support") || "Lifetime Support"}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
                <span className="text-xs text-slate-400">{t("hero.scrollDown") || "Scroll to explore"}</span>
                <ChevronDown className="w-6 h-6 text-primary-400" />
            </div>
        </section>
    );
}

export default Hero;
