import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERODATABASE } from "../../database/HeroDataBase";
import "./css/HeroCss.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Hero() {

    
    return (
        <div className="relative w-full mx-auto md:block hidden">
            <button className="swiper-button-prev">
                <ChevronLeft />
            </button>

            <button className="swiper-button-next">
                <ChevronRight />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
            >
                {HERODATABASE.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="w-full h-[600px] rounded-2xl relative bg-center overflow-hidden"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;
