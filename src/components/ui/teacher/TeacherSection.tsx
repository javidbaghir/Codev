import { useTranslation } from "react-i18next";
import { dbTeacherEn } from "../../../database/dbTeacherDataEn";
import { dbTeacherAz } from "../../../database/dbTeacherDataAz";
import Title from "../Title";
import TeacherCard from "./TeacherCard";

const TeacherSection = () => {

  const { t, i18n } = useTranslation();
  const data = i18n.language === "az" ? dbTeacherAz : dbTeacherEn;
  return (
    <div id="teachers" className="py-[100px] flex flex-col items-center">
      <div className="mb-10">
        <Title title={t("header.teachers")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            img={teacher.image}
            name={teacher.name}
            position={teacher.position}
            linkedinLink={teacher.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherSection;