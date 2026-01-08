import { useTranslation } from "react-i18next";
import { Clock, Award } from "lucide-react";
import "../css/CourseCategory.css";

const CourseCategory = () => {
    const { t } = useTranslation();

    const courses = [

        {
            id: 2,
            img: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png",
            title: "Cisco",
            desc: t("courses.ciscoDesc") || "Network engineering",
            duration: `${t("courses.ciscoDuration")} ${t("courses.months")}`
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/48/ac/be/48acbee2831f9186335645d6f3bc88ec.jpg",
            title: "Help Desk",
            desc: t("courses.helpdeskDesc") || "IT support skills",
            duration: `${t("courses.helpdeskDuration")} ${t("courses.months")}`
        },

    ];

    return (
        <section id="courses" className="courses-section">
            <div className="section-container">
                <div className="courses-header">
                    <span className="courses-badge">{t("courses.title") || "Courses"}</span>
                </div>

                <div className="courses-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-item">
                            <div className="course-image" style={{ backgroundImage: `url(${course.img})` }}>
                                <div className="course-overlay"></div>
                            </div>
                            <div className="course-content">
                                <h3 className="course-name">{course.title}</h3>
                                <p className="course-desc">{course.desc}</p>
                                <div className="course-meta">
                                    <span className="course-duration">
                                        <Clock size={16} />
                                        {course.duration}
                                    </span>
                                    <Award size={20} className="course-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseCategory;
