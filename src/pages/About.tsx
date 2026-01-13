import { useTranslation } from "react-i18next";
import { dbAboutPageEn } from "../database/dbAboutPageEn";
import { dbAboutPageAz } from "../database/dbAboutPageAz";
import { Sparkles, Target, Award, BookOpen, Users } from "lucide-react";

function About() {
  const { t, i18n } = useTranslation();
  const data = i18n.language === "az" ? dbAboutPageAz : dbAboutPageEn;

  const icons = [Target, Award, BookOpen, Users];

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-24">
        {/* Page Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#14b8a6] animate-pulse" />
            <span className="px-4 py-2 rounded-full glass-light border border-white/20 text-sm font-semibold text-white inline-flex items-center gap-2">
              <Users size={16} className="text-[#6366f1]" />
              {t("aboutPage.badge") || "About Us"}
            </span>
            <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fade-in-up animation-delay-200">
            {t("aboutPage.aboutTitle") || "Who We Are"}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            {t("aboutPage.subtitle") || "Empowering the next generation of IT professionals"}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-12">
          {data.map((item, index) => {
            const Icon = icons[index] || Target;
            return (
              <div
                key={item.id}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group relative max-w-4xl w-full">
                  {/* Neon Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                  <div
                    className={`relative glass-dark p-8 md:p-12 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {/* Icon Badge */}
                    <div
                      className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#ec4899] items-center justify-center mb-6 neon-shadow ${
                        index % 2 === 0 ? "" : "float-right ml-6"
                      }`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-4">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className={`h-1 w-24 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full mb-6 ${
                        index % 2 === 0 ? "" : "ml-auto"
                      }`}
                    ></div>

                    {/* Description */}
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-800">
          <div className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <a
              href="/contact-us"
              className="relative px-8 py-4 glass-dark rounded-full border border-white/20 text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <span>Get Started Today</span>
              <Sparkles size={20} className="animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;