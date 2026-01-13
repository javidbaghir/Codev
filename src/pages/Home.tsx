import Hero from "../components/hero/Hero";
import OurSuccess from "../components/successSide/OurSuccess";
import ChooseUs from "../components/ui/chooseUs/ChooseUs";
import CourseCategory from "../components/ui/courseCategories/CourseCategory";
import TeacherSection from "../components/ui/teacher/TeacherSection";
import "../pages/css/HomeCss.css";

const Home = () => {
    return (
        <>
            {/* Hero Section - Full Width */}
            <Hero />

            {/* Other Sections */}
            <div className="home-container">
                {/* Why Choose Us - Benefits Section */}
                <ChooseUs />

                {/* Course Categories - Main Courses */}
                <CourseCategory />

                {/* Expert Instructors */}
                <TeacherSection />

                {/* Student Success Stories - Certifications */}
                <OurSuccess />
            </div>
        </>
    );
};

export default Home;
