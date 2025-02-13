import { useTranslation } from "react-i18next";
import Title from "../components/ui/Title";
import { dbAboutPageEn } from "../database/dbAboutPageEn";
import { dbAboutPageAz } from "../database/dbAboutPageAz";

function About() {

  const { t, i18n } = useTranslation();
  const data = i18n.language === "az" ? dbAboutPageAz : dbAboutPageEn;

  return (
    <div className="space-y-[40px] p-[50px]">
        <Title title={t("aboutPage.aboutTitle")} />

      <div className="flex flex-col justify-center md:justify-start md:space-y-4 space-y-[60px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex ${index % 2 === 0
              ? "md:justify-start justify-center"
              : "md:justify-end justify-center"
              }`}
          >
            <div
              className={`w-[400px] ${index % 2 === 0
                ? "md:text-left text-center"
                : "text-center md:text-right"
                }`}
            >
              <h3 className="text-[30px]">{item.title}</h3>
              <ul>
                <li>{item?.desc}</li>
              </ul>
              {/* <p>{item?.desc}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;