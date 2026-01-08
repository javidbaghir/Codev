import { useTranslation } from "react-i18next";
import Title from "../components/ui/Title";
import { dbAboutPageEn } from "../database/dbAboutPageEn";
import { dbAboutPageAz } from "../database/dbAboutPageAz";

function About() {

  const { t, i18n } = useTranslation();
  const data = i18n.language === "az" ? dbAboutPageAz : dbAboutPageEn;

  return (
    <div className="space-y-[50px] md:space-y-[60px] p-5 md:p-[50px] lg:p-[70px] mb-10 md:mb-16" style={{ marginTop: '140px' }}>
      <Title title={t("aboutPage.aboutTitle")} />

      <div className="flex flex-col justify-center md:justify-start space-y-[60px] md:space-y-[80px] lg:space-y-[100px] max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex ${index % 2 === 0
              ? "md:justify-start justify-center"
              : "md:justify-end justify-center"
              }`}
          >
            <div
              className={`w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-8 md:p-10 bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 ${index % 2 === 0
                ? "md:text-left text-center"
                : "text-center md:text-right"
                }`}
            >
              <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-secondary-800 mb-4">{item.title}</h3>
              <div className="h-1 w-20 bg-primary rounded-full mb-6 mx-auto md:mx-0"></div>
              <ul className="space-y-3">
                <li className="text-[16px] md:text-[18px] text-secondary-600 leading-relaxed">{item?.desc}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;