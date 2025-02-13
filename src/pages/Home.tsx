import Hero from "../components/hero/Hero"
import OurSuccess from "../components/successSide/OurSuccess"
import ChooseUs from "../components/ui/chooseUs/ChooseUs"
import CourseCategory from "../components/ui/courseCategories/CourseCategory"
import TeacherSection from "../components/ui/teacher/TeacherSection"
import "../pages/css/HomeCss.css"


const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <ChooseUs />
            <CourseCategory />
            <TeacherSection />
            <OurSuccess />
        </div>
    )
}

export default Home