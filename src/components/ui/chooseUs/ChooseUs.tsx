import { MonitorCheck, Router, UsersRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../css/ChooseUs.css";

const ChooseUs = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: MonitorCheck,
            title: t("chooseUs.highQuality"),
            description: t("chooseUs.highQualityContent"),
            number: "01"
        },
        {
            icon: UsersRound,
            title: t("chooseUs.team"),
            description: t("chooseUs.teamContent"),
            number: "02"
        },
        {
            icon: Router,
            title: t("chooseUs.approach"),
            description: t("chooseUs.approachContent"),
            number: "03"
        }
    ];

    return (
        <section className="why-section">
            <div className="section-container">
                {/* Header */}
                <div className="why-header">
                    <span className="why-subtitle">{t("chooseUs.title") || "Why Choose Us"}</span>
                </div>

                {/* Features */}
                <div className="why-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="why-feature-card">
                            <div className="why-feature-number">{feature.number}</div>
                            <div className="why-feature-icon-box">
                                <feature.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="why-feature-title">{feature.title}</h3>
                            <p className="why-feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
