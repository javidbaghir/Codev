import { useTranslation } from "react-i18next";
import { dbTeacherEn } from "../../../database/dbTeacherDataEn";
import { dbTeacherAz } from "../../../database/dbTeacherDataAz";
import { Linkedin, Award, Users, Sparkles } from "lucide-react";

const TeacherSection = () => {
    const { t, i18n } = useTranslation();
    const teachers = i18n.language === "az" ? dbTeacherAz : dbTeacherEn;

    return (
        <section id="teachers" className="relative py-20 px-4 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-6 animate-fade-in-up">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#14b8a6] animate-pulse" />
                        <span className="px-4 py-2 rounded-full glass-light border border-white/20 text-sm font-semibold text-white inline-flex items-center gap-2">
                            <Users size={16} className="text-[#6366f1]" />
                            {t("teachers.badge") || "Expert Instructors"}
                        </span>
                        <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fade-in-up animation-delay-200">
                        {t("teachers.title") || "Meet Our Experts"}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                        {t("teachers.subtitle") || "Learn from industry professionals with years of real-world experience"}
                    </p>
                </div>

                {/* Teachers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers.map((teacher, index) => (
                        <div
                            key={teacher.id}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Neon Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500"></div>

                            <div className="relative glass-dark p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                                {/* Teacher Image */}
                                <div className="relative mb-6">
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent opacity-60"></div>

                                        {/* LinkedIn Badge on Hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href={teacher.linkedinLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 glass-light rounded-full border border-white/20 text-white font-semibold hover:scale-110 transition-transform duration-300 neon-shadow"
                                            >
                                                <Linkedin size={20} />
                                                <span>Connect</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Award Badge */}
                                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-full flex items-center justify-center border-4 border-[#0f0f23] animate-pulse">
                                        <Award size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Teacher Info */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                                        {teacher.name}
                                    </h3>
                                    <p className="text-gray-300 font-medium">
                                        {teacher.position}
                                    </p>

                                    {/* LinkedIn Link */}
                                    <a
                                        href={teacher.linkedinLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-light border border-white/10 text-sm font-semibold text-white hover:border-[#6366f1] hover:neon-shadow transition-all duration-300"
                                    >
                                        <Linkedin size={16} />
                                        <span>{t("teachers.linkedinProfile") || "LinkedIn Profile"}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;
