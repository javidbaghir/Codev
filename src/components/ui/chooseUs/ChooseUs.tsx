import { MonitorCheck, Router, UsersRound } from "lucide-react";
import "../css/ChooseUs.css";
import Title from "../Title";
import ChooseusCard from "./ChooseusCard";
import { useTranslation } from "react-i18next";

const ChooseUs = () => {
    const { t } = useTranslation();
    return (
        <div className="chooseus-container">
            <div>
            <Title title={t("chooseUs.title")} />
            </div>

            <div className="chooseus-body">
                <ChooseusCard
                    icon={<MonitorCheck size={45} />}
                    cardTitle={t("chooseUs.highQuality")}
                    cardDescription={t("chooseUs.highQualityContent")}
                />
                <ChooseusCard
                    icon={<UsersRound size={45} />}
                    cardTitle={t("chooseUs.team")}
                    cardDescription={t("chooseUs.teamContent")}
                />
                <ChooseusCard
                    icon={<Router size={45} />}
                    cardTitle={t("chooseUs.approach")}
                    cardDescription={t("chooseUs.approachContent")}
                />
            </div>
        </div>
    );
};

export default ChooseUs;