import { useTranslation } from "react-i18next";
import { Clock, Award, Sparkles, ArrowRight, Star } from "lucide-react";
import "../css/CourseCategory.css";

const CourseCategory = () => {
    const { t } = useTranslation();

    const courses = [
        {
            id: 2,
            img: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png",
            title: "Cisco",
            desc: t("courses.ciscoDesc") || "Network engineering",
            duration: `${t("courses.ciscoDuration")} ${t("courses.months")}`,
            gradient: "from-primary-600 to-primary-800",
            borderColor: "border-primary-500/30"
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/48/ac/be/48acbee2831f9186335645d6f3bc88ec.jpg",
            title: "Help Desk",
            desc: t("courses.helpdeskDesc") || "IT support skills",
            duration: `${t("courses.helpdeskDuration")} ${t("courses.months")}`,
            gradient: "from-secondary-600 to-secondary-800",
            borderColor: "border-secondary-500/30"
        },
    ];

    return (
        <section id="courses" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-accent-500/30 mb-4">
                        <Sparkles className="w-4 h-4 text-accent-400" />
                        <span className="text-sm text-slate-300 font-medium">
                            {t("courses.subtitle") || "Our Courses"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("courses.title") || "Transform Your "}
                        <span className="gradient-text">Career Path</span>
                    </h2>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {t("courses.description") || "Industry-leading certification programs designed to boost your IT career"}
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={course.id}
                            className={`group relative glass-light rounded-3xl overflow-hidden border ${course.borderColor} hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${course.img})` }}
                                ></div>

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>

                                {/* Floating Rating Badge */}
                                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-dark-900/90 backdrop-blur-sm border border-yellow-500/30">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-bold text-white">5.0</span>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-shine translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                                    {course.title}
                                </h3>

                                <p className="text-slate-400 mb-4">
                                    {course.desc}
                                </p>

                                {/* Meta info */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Clock size={16} className="text-accent-400" />
                                        <span>{course.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Award size={16} className="text-primary-400" />
                                        <span>{t("courses.certified") || "Certified"}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-gradient-primary hover:border-transparent transition-all duration-300 group-hover:shadow-neon">
                                    <span>{t("courses.learnMore") || "Learn More"}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseCategory;
