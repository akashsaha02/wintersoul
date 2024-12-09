import { Carousel } from "@material-tailwind/react";  // Import Material Tailwind Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from '../../assets/banner-001.jpeg';
import sliderImg2 from '../../assets/sliderImg2.jpg';
import sliderImg3 from '../../assets/slider3.avif';
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const SliderComponent = () => {
    const slides = [
        {
            id: 1,
            title: "Donate and Share Joy",
            description: "Help bring smiles to those in need.",
            img: sliderImg1,
            button: "Donate Now",
        },
        {
            id: 2,
            title: "Support Local Communities",
            description: "Together, we can make a difference.",
            img: sliderImg2,
            button: "Get Involved",
        },
        {
            id: 3,
            title: "Essential Blankets",
            description: "Providing warmth to those in need.",
            img: sliderImg3,
            button: "Learn More",
        },
    ];

    const navigate = useNavigate();

    return (
        <div className="w-full mx-auto">
            {/* Material Tailwind Carousel */}
            <Carousel
                loop
                autoplay
                interval={3000}
                showIndicators={true}
                showArrows={false}
                className=""
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="relative">
                        {/* Background Image */}
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-[75vh] md:h-[90vh] object-cover rounded-lg"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-black/60 flex flex-col justify-center items-center text-center px-6 py-10">
                            <h2 className="text-white text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="text-gray-200 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
                                {slide.description}
                            </p>
                            <Button
                                onClick={() => navigate('/donation-campaigns')}
                                color="indigo"
                                className="text-white px-8 py-3 text-sm md:text-lg rounded-full shadow-lg hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                {slide.button}
                            </Button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SliderComponent;
