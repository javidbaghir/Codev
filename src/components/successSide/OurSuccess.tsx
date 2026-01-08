import { useRef } from "react";
import { ChevronLeft, ChevronRight, Award, TrendingUp, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { successAz } from "../../database/SuccessAz";
import { successEn } from "../../database/SuccessEn";
import "./css/OurSuccess.css";

const OurSuccess = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const { t, i18n } = useTranslation();
    const successStories = i18n.language === "az" ? successAz : successEn;

    const slideLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -350,
                behavior: "smooth",
            });
        }
    };

    const slideRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 350,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="success-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="success-header">
                    <div className="success-header-content">
                        <span className="success-badge">
                            <Award size={16} />
                            {t("success.badge") || "Student Success"}
                        </span>
               
                        <p className="success-subtitle">
                            {t("success.subtitle") || "Certified professionals who started their journey with us"}
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="success-nav-buttons">
                        <button
                            onClick={slideLeft}
                            className="success-nav-btn"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={slideRight}
                            className="success-nav-btn"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Success Cards Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="success-cards-container"
                >
                    {successStories.map((student, index) => (
                        <div key={index} className="success-card">
                            {/* Certificate Image */}
                            <div className="success-card-image-wrapper">
                                <div
                                    className="success-card-image"
                                    style={{ backgroundImage: `url(${student.img})` }}
                                >
                                    <div className="success-card-overlay"></div>

                                    {/* Checkmark Badge */}
                                    <div className="success-checkmark">
                                        <CheckCircle size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Student Info */}
                            <div className="success-card-info">
                                <h3 className="success-card-name">{student.name}</h3>
                                <p className="success-card-exam">{student.exam}</p>

                                {/* Verified Badge */}
                                <div className="success-verified">
                                    <Award size={14} />
                                    <span>Certified</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement Stats */}
                <div className="success-stats">
                    <div className="success-stat-card">
                        <div className="success-stat-icon">
                            <Award size={24} />
                        </div>
                        <div className="success-stat-number">
                            {successStories.length}+
                        </div>
                        <p className="success-stat-label">
                            {t("success.certified") || "Certified Students"}
                        </p>
                    </div>
                    <div className="success-stat-card">
                        <div className="success-stat-icon">
                            <TrendingUp size={24} />
                        </div>
                        <div className="success-stat-number">95%</div>
                        <p className="success-stat-label">
                            {t("success.passRate") || "Pass Rate"}
                        </p>
                    </div>
                    <div className="success-stat-card">
                        <div className="success-stat-icon">
                            <Award size={24} />
                        </div>
                        <div className="success-stat-number">100%</div>
                        <p className="success-stat-label">
                            {t("success.jobReady") || "Job Ready"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSuccess;
