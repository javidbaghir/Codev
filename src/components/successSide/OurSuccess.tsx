import { useRef } from "react";
import Title from "../ui/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import OurSuccessCard from "./OurSuccessCard";
import { successAz } from "../../database/SuccessAz";
import { successEn } from "../../database/SuccessEn";

const OurSuccess = () => {
    const feedbackContainerRef = useRef<HTMLDivElement | null>(null);
    const { t, i18n } = useTranslation();
    const data = i18n.language === "az" ? successAz : successEn;

    const slideLeft = () => {
        if (feedbackContainerRef.current) {
            feedbackContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const slideRight = () => {
        if (feedbackContainerRef.current) {
            feedbackContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="py-[100px]">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
                <Title title={t("success.title")} />
                <div className="flex gap-2">
                    <button
                        onClick={slideLeft}
                        className="bg-white hover:bg-gray-300 p-[10px] rounded-full drop-shadow-md hover:drop-shadow-lg transition-shadow"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={slideRight}
                        className="bg-white hover:bg-gray-300 p-[10px] rounded-full drop-shadow-md hover:drop-shadow-lg transition-shadow"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div
                ref={feedbackContainerRef}
                className="flex gap-[32px] overflow-x-auto mt-[40px] scrollbar-hide"
            >
                {data.map((student, index) => (
                    <OurSuccessCard
                        key={index}
                        img={student.img}
                        name={student.name}
                        exam={student.exam}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurSuccess;