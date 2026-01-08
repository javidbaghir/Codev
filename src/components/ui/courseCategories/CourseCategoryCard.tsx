import "../css/CourseCategoryCard.css";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";

interface CategoryCard {
    img: string;
    title: string;
    description?: string;
    level?: string;
    duration?: string;
}

const CourseCategoryCard = ({ img, title, description, level, duration }: CategoryCard) => {
    return (
        <div className="premium-course-card group">
            {/* Premium Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 rounded-3xl blur-3xl transition-all duration-700 -z-10 group-hover:scale-110"></div>

            {/* Card Border Effect */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-primary/30 transition-all duration-500"></div>

            {/* Image Container */}
            <div className="premium-course-image-wrapper">
                <div className="premium-course-image">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Floating Badge */}
                    {level && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-dark text-white text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <TrendingUp size={12} />
                            <span>{level}</span>
                        </div>
                    )}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-shimmer"></div>
                </div>
            </div>

            {/* Content */}
            <div className="premium-course-content">
                <h3 className="premium-course-title group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                {description && (
                    <p className="premium-course-description">
                        {description}
                    </p>
                )}

                {/* Duration Info */}
                {duration && (
                    <div className="flex items-center gap-2 text-secondary-500 text-sm mt-3">
                        <Clock size={14} className="text-primary" />
                        <span>{duration}</span>
                    </div>
                )}

                {/* Learn More Link */}
                <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-1">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 rounded-b-3xl transition-opacity duration-500"></div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-700"></div>
        </div>
    );
};

export default CourseCategoryCard;
