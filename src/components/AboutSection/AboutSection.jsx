import aboutImg from '../../assets/aboutImage.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const aboutData = [
    {
        title: 'Mission',
        content: 'At Warm Haven, we strive to create a world where every person has access to warm clothing during the harsh winter months. Our dedicated team works year-round to ensure that no one has to face the cold without the warmth they deserve.',
        bgColor: 'bg-indigo-50',
    },
    {
        title: 'Vision',
        content: 'Our vision is to become a leading non-profit organization that empowers communities across the country to support those in need. We envision a future where everyone has the resources to stay warm, safe, and healthy during winter.',
        bgColor: 'bg-white',
    },
    {
        title: 'Impact',
        content: 'In the past 5 years, we’ve distributed over 10,000+ items of winter clothing to families and individuals in need. Through our network of volunteers and donors, we have reached numerous districts and helped thousands stay warm during the coldest months.',
        bgColor: 'bg-white',
    },
    {
        title: 'How You Can Help',
        content: 'Your support makes all the difference! Whether through donating warm clothing, volunteering, or spreading the word, every action counts. Join us today and be a part of the change.',
        bgColor: 'bg-indigo-50',
    },
];

const AboutSection = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 bg-green-100 shadow-lg rounded-lg overflow-hidden my-6 items-center"
                data-aos="fade-up"
            >
                <img
                    src={aboutImg}
                    alt="About Us"
                    className="w-full object-cover h-full"
                    data-aos="fade-right"

                />
                <div className="p-8 text-center md:text-start"
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4"
                    >
                        About Us
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-xl" data-aos="fade-left" data-aos-delay="200">
                        Welcome to <strong className="text-indigo-800">Warm Haven</strong>! Our mission is to ensure that no one has to endure the winter season without adequate clothing. Through your generous donations, we collect and distribute warm clothes to underprivileged families and individuals across Bangladesh.
                    </p>
                    <p className="text-lg text-gray-700 mb-6" data-aos="fade-left" data-aos-delay="400">
                        Join us in making a difference. Together, we can bring warmth and comfort to those in need.
                    </p>
                    <button
                        onClick={() => navigate("/donation-campaigns")}
                        className="bg-indigo-600 text-white py-2 font-bold px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 text-lg"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* About Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6">
                {aboutData.map((section, index) => (
                    <div
                        key={index}
                        className={`py-12 px-2 text-center ${section.bgColor} border-2 border-gray-200 rounded-lg`}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{section.title}</h3>
                        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="flex justify-center items-center py-6" data-aos="zoom-in">
                <button
                    onClick={() => navigate("/donation-campaigns")}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md font-bold hover:bg-indigo-700 transition duration-200 text-lg"
                >
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default AboutSection;
