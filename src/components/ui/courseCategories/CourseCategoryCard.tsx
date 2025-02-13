import "../css/CourseCategoryCard.css"

interface CategoryCard {
    img: string;
    title: string;
}
const CourseCategoryCard = ({ img, title }: CategoryCard) => {
    return (
        <div className="category-container">
            <figure className="category-figure">
                <img className="category-img" src={img} alt="Kurs kateqoriyaları" />
            </figure>

            <p className="category-title">{title}</p>
        </div>
    )
}

export default CourseCategoryCard