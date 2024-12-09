import { Carousel } from "@material-tailwind/react";  // Import Material Tailwind Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";


const SliderComponent = () => {
    const slides = [
        {
            id: 1,
            heading: "Warmth for the Needy",
            paragraph: "Help us provide essential winter supplies to those in need. Your donation can make a real difference.",
            // img: bgImg2,
            button: "Donate Now",
        },
        {
            id: 2,
            heading: "Spread the Warmth, Share the Joy",
            paragraph: "Join us in spreading warmth and joy this winter. Your generous donation will bring smiles to countless faces.",
            // img: bgImg,
            button: "Get Involved",
        },
        {
            id: 3,
            heading: "A Winter of Hope",
            paragraph: "Let's make this winter a season of hope and compassion. Your donation will help us provide much-needed support to those in need.",
            // img: bgImg3,
            button: "Learn More",
        },
    ];
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-center items-center mx-auto bg-winter bg-cover" >
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
                    <div key={slide.id}>
                        {/* Gradient Overlay */}
                        <div className="inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex flex-col justify-center items-center text-center px-6 py-10 w-full h-[70vh] md:h-[80vh]">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{slide.heading}</h2>
                            <p className="text-lg text-white mt-4 max-w-2xl">{slide.paragraph}</p>
                            <button onClick={() => { navigate('/donation-campaigns') }} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4">{slide.button}</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SliderComponent;
