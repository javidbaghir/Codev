import { MonitorCheck, Router, UsersRound, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../css/ChooseUs.css";

const ChooseUs = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: MonitorCheck,
            title: t("chooseUs.highQuality"),
            description: t("chooseUs.highQualityContent"),
            gradient: "from-primary-500 to-primary-700",
            iconColor: "text-primary-400",
            borderColor: "border-primary-500/30",
            shadowColor: "shadow-neon"
        },
        {
            icon: UsersRound,
            title: t("chooseUs.team"),
            description: t("chooseUs.teamContent"),
            gradient: "from-secondary-500 to-secondary-700",
            iconColor: "text-secondary-400",
            borderColor: "border-secondary-500/30",
            shadowColor: "shadow-neon-pink"
        },
        {
            icon: Router,
            title: t("chooseUs.approach"),
            description: t("chooseUs.approachContent"),
            gradient: "from-accent-500 to-accent-700",
            iconColor: "text-accent-400",
            borderColor: "border-accent-500/30",
            shadowColor: "shadow-neon-teal"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated background accent */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-pulse-slow"></div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-primary-500/30 mb-4">
                        <Sparkles className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-slate-300 font-medium">
                            {t("chooseUs.subtitle") || "Why Choose Us"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("chooseUs.title") || "Excellence In Every "}
                        <span className="gradient-text">Aspect</span>
                    </h2>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {t("chooseUs.description") || "We deliver top-tier IT education with industry-leading standards and expert guidance"}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative glass-light rounded-3xl p-8 border ${feature.borderColor} hover:${feature.shadowColor} transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="w-full h-full bg-dark-900 rounded-2xl flex items-center justify-center">
                                        <Icon className={`w-8 h-8 ${feature.iconColor}`} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative number */}
                                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-shine translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
