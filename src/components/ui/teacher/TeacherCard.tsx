import { Link } from "react-router-dom";
import { Linkedin, ExternalLink } from "lucide-react";
import "../css/TeacherCard.css";

interface Teacher {
    img: string;
    name: string;
    position: string;
    linkedinLink: string;
}

const TeacherCard: React.FC<Teacher> = ({ img, name, position, linkedinLink }) => {
    return (
        <div className="premium-teacher-card group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl blur-3xl transition-all duration-700 -z-10 group-hover:scale-110"></div>

            {/* Card Border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-primary/20 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Profile Image with Hover Overlay */}
                <div className="relative">
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-300 transition-all duration-500 shadow-premium">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* LinkedIn Overlay */}
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-95 flex items-center justify-center transition-all duration-500">
                            <Link
                                to={linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            >
                                <Linkedin size={24} strokeWidth={2.5} />
                                <span>Connect</span>
                                <ExternalLink size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border-2 border-primary-200 shadow-premium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-xs font-semibold text-primary">Available</span>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-secondary-900 group-hover:text-primary transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-sm lg:text-base text-secondary-600 font-medium">
                        {position}
                    </p>
                </div>

                {/* LinkedIn Link Button */}
                <Link
                    to={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary-50 hover:bg-primary-50 border border-secondary-200 hover:border-primary text-secondary-700 hover:text-primary font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                >
                    <Linkedin size={16} />
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                </Link>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-700"></div>
        </div>
    );
};

export default TeacherCard;
