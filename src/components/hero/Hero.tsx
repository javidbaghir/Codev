import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Play, BookOpen, Users, TrendingUp, Star, ArrowRight } from "lucide-react";
import { HERODATABASE } from "../../database/HeroDataBase";
import { useTranslation } from "react-i18next";
import "./css/HeroCss.css";
import "swiper/swiper-bundle.css";

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero-modern-wrapper">
            {/* Full-width Background Slider */}
            <div className="hero-bg-slider">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop
                    speed={2000}
                    className="hero-swiper-bg"
                >
                    {HERODATABASE.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="hero-slide-bg"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Gradient Overlays */}
                <div className="hero-overlay-primary"></div>
                <div className="hero-overlay-dark"></div>
            </div>

            {/* Hero Content - Centered */}
            <div className="hero-content-wrapper">
                <div className="section-container">
                    <div className="hero-content-center">
                        {/* Main Content Card */}
                        <div className="hero-card-glass">
                            {/* Floating Badge */}
                            <div className="hero-badge-top">
                                <Star className="hero-badge-icon" size={16} />
                                <span>{t("hero.badge") || "Premium IT Education"}</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="hero-main-title">
                                {t("hero.mainTitle") || "Transform Your Future with"}
                                <span className="hero-title-highlight"> Codev Academy</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="hero-subtitle">
                                {t("hero.subtitle") || "Learn cutting-edge IT skills from industry experts. Get certified, get hired, get ahead."}
                            </p>

                            {/* Stats Bar */}
                            <div className="hero-stats-bar">
                                <div className="hero-stat-item">
                                    <Users className="hero-stat-icon" size={20} />
                                    <div className="hero-stat-content">
                                        <div className="hero-stat-number">100+</div>
                                        <div className="hero-stat-label">{t("hero.students") || "Students"}</div>
                                    </div>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat-item">
                                    <BookOpen className="hero-stat-icon" size={20} />
                                    <div className="hero-stat-content">
                                        <div className="hero-stat-number">10+</div>
                                        <div className="hero-stat-label">{t("hero.courses") || "Courses"}</div>
                                    </div>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat-item">
                                    <TrendingUp className="hero-stat-icon" size={20} />
                                    <div className="hero-stat-content">
                                        <div className="hero-stat-number">95%</div>
                                        <div className="hero-stat-label">{t("hero.success") || "Success"}</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="hero-cta-group">
                                <button className="hero-btn-primary">
                                    <Play size={18} />
                                    <span>{t("hero.startNow") || "Start Learning Now"}</span>
                                    <ArrowRight size={18} className="hero-btn-arrow" />
                                </button>
                                <button className="hero-btn-secondary">
                                    <BookOpen size={18} />
                                    <span>{t("hero.exploreCourses") || "Explore Courses"}</span>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="hero-trust-row">
                                <div className="hero-trust-item">
                                    <div className="hero-trust-check">✓</div>
                                    <span>{t("hero.certified") || "Industry Certified"}</span>
                                </div>
                                <div className="hero-trust-item">
                                    <div className="hero-trust-check">✓</div>
                                    <span>{t("hero.experts") || "Expert Instructors"}</span>
                                </div>
                                <div className="hero-trust-item">
                                    <div className="hero-trust-check">✓</div>
                                    <span>{t("hero.support") || "24/7 Support"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="hero-float-element hero-float-1">
                            <div className="hero-float-icon">
                                <BookOpen size={24} />
                            </div>
                            <div className="hero-float-text">
                                <div className="hero-float-number">10+</div>
                                <div className="hero-float-label">Courses</div>
                            </div>
                        </div>

                        <div className="hero-float-element hero-float-2">
                            <div className="hero-float-icon">
                                <Users size={24} />
                            </div>
                            <div className="hero-float-text">
                                <div className="hero-float-number">100+</div>
                                <div className="hero-float-label">Students</div>
                            </div>
                        </div>

                        <div className="hero-float-element hero-float-3">
                            <div className="hero-float-icon">
                                <Star size={24} />
                            </div>
                            <div className="hero-float-text">
                                <div className="hero-float-number">5.0</div>
                                <div className="hero-float-label">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <div className="hero-scroll-mouse">
                    <div className="hero-scroll-wheel"></div>
                </div>
                <span className="hero-scroll-text">{t("hero.scrollDown") || "Scroll to explore"}</span>
            </div>
        </section>
    );
}

export default Hero;
