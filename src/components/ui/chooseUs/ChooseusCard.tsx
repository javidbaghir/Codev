import "../css/ChooseusCard.css";

interface Card {
    icon: React.ReactNode;
    cardTitle: string;
    cardDescription: string;
    delay?: string;
}

const ChooseusCard = ({ icon, cardTitle, cardDescription, delay = "0s" }: Card) => {
    return (
        <div className="premium-choose-card group" style={{ animationDelay: delay }}>
            {/* Premium Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-700 -z-10"></div>

            {/* Glass Border Effect */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-primary/20 transition-all duration-500"></div>

            {/* Card Content */}
            <div className="relative z-10">
                {/* Icon Container with Premium Effect */}
                <div className="premium-icon-wrapper group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative premium-icon-bg">
                        <div className="text-primary transition-transform duration-500 group-hover:scale-110">
                            {icon}
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="premium-card-content">
                    <h3 className="premium-card-title group-hover:text-primary transition-colors duration-300">
                        {cardTitle}
                    </h3>
                    <p className="premium-card-description">
                        {cardDescription}
                    </p>

                    {/* Decorative Bottom Accent */}
                    <div className="mt-6 flex gap-1.5 items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="h-1 w-12 bg-gradient-primary rounded-full shadow-glow"></div>
                        <div className="h-1 w-1 bg-primary rounded-full"></div>
                        <div className="h-1 w-1 bg-primary rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Corner Accent (Premium Touch) */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-700"></div>
        </div>
    );
};

export default ChooseusCard;
