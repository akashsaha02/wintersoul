import aboutImg from "../../assets/aboutImage.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const AboutSection = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 shadow-xl rounded-lg overflow-hidden my-8 items-center"
                data-aos="fade-up"
            >
                <img
                    src={aboutImg}
                    alt="About Us"
                    className="w-full object-cover h-full"
                    data-aos="fade-right"
                />
                <div className="p-10 lg:p-14 text-center md:text-start">
                    <h2
                        className="text-4xl font-bold text-indigo-700 mb-6"
                        data-aos="fade-left"
                    >
                        About Us
                    </h2>
                    <p
                        className="text-lg text-gray-700 leading-relaxed mb-6"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Welcome to{" "}
                        <strong className="text-indigo-700">Winter Soul</strong>! Our
                        mission is to ensure that no one has to endure the winter
                        season without adequate clothing. Through your generous
                        donations, we collect and distribute warm clothes to
                        underprivileged families and individuals across Bangladesh.
                    </p>
                    <p
                        className="text-lg text-gray-700 leading-relaxed mb-8"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        Join us in making a difference. Together, we can bring warmth
                        and comfort to those in need.
                    </p>
                    <button
                        onClick={() => navigate("/donation-campaigns")}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            

            {/* Call to Action */}
            <div className="flex justify-center items-center py-8" data-aos="zoom-in">
                <button
                    onClick={() => navigate("/donation-campaigns")}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default AboutSection;
