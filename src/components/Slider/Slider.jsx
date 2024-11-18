import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import sliderImg from '../../assets/sliderImg-01.jpg'

// Import Swiper modules
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const SliderComponent = () => {
    const slides = [
        {
            id: 1,
            title: "Donate and Share Joy",
            description: "Help bring smiles to those in need.",
            img: sliderImg,
            button: "Donate Now",
        },
        {
            id: 2,
            title: "Support Local Communities",
            description: "Together, we can make a difference.",
            img: sliderImg,
            button: "Get Involved",
        },
        {
            id: 3,
            title: "Essential Blankets",
            description: "Help bring smiles to those in need.",
            img: sliderImg,
            button: "Learn More",
        },
    ];

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-7xl mx-auto my-8">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                effect="fade"
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="rounded-lg shadow-lg"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative">
                            {/* Background Image */}
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-64 md:h-96 object-cover rounded-lg"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-200 text-sm md:text-lg mb-4">
                                    {slide.description}
                                </p>
                                <button
                                    onClick={() => navigate('/donation-campaigns')}
                                    className="px-6 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
                                    {slide.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderComponent;

