import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"; // Import the CSS file

const Slider = () => {
    const slides = [
        {
            image: "https://example.com/images/slider1.jpg",
            title: "Warm Clothes for All",
            subtitle: "Join us in spreading warmth this winter.",
        },
        {
            image: "https://example.com/images/slider2.jpg",
            title: "Support Local Communities",
            subtitle: "Together, we can make a difference.",
        },
        {
            image: "https://example.com/images/slider3.jpg",
            title: "Donate and Share Joy",
            subtitle: "Help bring smiles to those in need.",
        },
    ];

    return (
        <div className="w-full h-[500px]">
            <Swiper
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                className="swiper-container"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;