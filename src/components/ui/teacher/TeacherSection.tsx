import { useTranslation } from "react-i18next";
import { dbTeacherEn } from "../../../database/dbTeacherDataEn";
import { dbTeacherAz } from "../../../database/dbTeacherDataAz";
import { Linkedin, Award, Users } from "lucide-react";
import "../css/TeacherSection.css";

const TeacherSection = () => {
    const { t, i18n } = useTranslation();
    const teachers = i18n.language === "az" ? dbTeacherAz : dbTeacherEn;

    return (
        <section id="teachers" className="teachers-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="teachers-header">
                    <span className="teachers-badge">
                        <Users size={16} />
                        {t("teachers.badge") || "Expert Instructors"}
                    </span>
            
                    <p className="teachers-subtitle">
                        {t("teachers.subtitle") || "Learn from industry professionals with years of real-world experience"}
                    </p>
                </div>

                {/* Teachers Grid */}
                <div className="teachers-grid">
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className="teacher-card">
                            {/* Teacher Image */}
                            <div className="teacher-image-wrapper">
                                <div
                                    className="teacher-image"
                                    style={{ backgroundImage: `url(${teacher.image})` }}
                                >
                                    <div className="teacher-overlay"></div>

                                    {/* LinkedIn Badge on Hover */}
                                    <a
                                        href={teacher.linkedinLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="teacher-linkedin-badge"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>

                                {/* Award Badge */}
                                <div className="teacher-award-badge">
                                    <Award size={20} />
                                </div>
                            </div>

                            {/* Teacher Info */}
                            <div className="teacher-info">
                                <h3 className="teacher-name">{teacher.name}</h3>
                                <p className="teacher-position">{teacher.position}</p>

                                {/* LinkedIn Link */}
                                <a
                                    href={teacher.linkedinLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="teacher-linkedin-link"
                                >
                                    <Linkedin size={16} />
                                    <span>{t("teachers.linkedinProfile") || "LinkedIn Profile"}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;
