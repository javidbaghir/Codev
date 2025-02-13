import { useTranslation } from "react-i18next";
import Title from "../Title"
import "../css/CourseCategory.css"
import CourseCategoryCard from "./CourseCategoryCard"


const CourseCategory = () => {
    const { t } = useTranslation();
    return (
        <div id="courses">
            <div>
                <Title title={t("courses.title")} />
            </div>

            <div className="card-container">
                <CourseCategoryCard img="https://i.pinimg.com/736x/86/ad/01/86ad01aac334ed269e9d33dab95a2217.jpg" title="Java" />
                <CourseCategoryCard img="https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png" title="Cisco" />
                <CourseCategoryCard img="https://i.pinimg.com/736x/48/ac/be/48acbee2831f9186335645d6f3bc88ec.jpg" title="Help Desk" />
                <CourseCategoryCard img="https://i.pinimg.com/736x/79/d8/4a/79d84a008d094b28bed41f66c6636dba.jpg" title={t("courses.design")} />
            </div>
        </div>
    )
}

export default CourseCategory