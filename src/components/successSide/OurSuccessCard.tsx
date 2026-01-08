import { Award, CheckCircle2 } from "lucide-react";

interface Success {
    img: string;
    name: string;
    exam: string;
}

const OurSuccessCard = ({ img, name, exam }: Success) => {
    return (
        <div className="premium-success-card group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl blur-3xl transition-all duration-700 -z-10"></div>

            {/* Card Border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-primary/20 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-6 lg:gap-8">
                {/* Certificate Image */}
                <div className="relative shrink-0">
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 p-4 shadow-premium group-hover:shadow-premium-lg transition-all duration-500">
                        <img
                            src={img}
                            alt={`${name} certificate`}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                        />
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                        <CheckCircle2 size={18} className="text-white" strokeWidth={3} />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-lg lg:text-xl font-bold text-secondary-900 group-hover:text-primary transition-colors duration-300">
                            {name}
                        </h3>
                        <div className="flex items-start gap-2">
                            <Award size={18} className="text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                            <p className="text-sm lg:text-base text-secondary-600 font-medium leading-relaxed">
                                {exam}
                            </p>
                        </div>
                    </div>

                    {/* Success Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-xs font-semibold text-primary">Certified</span>
                    </div>
                </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-700"></div>
        </div>
    );
};

export default OurSuccessCard;
