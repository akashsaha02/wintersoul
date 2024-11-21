import { useNavigate } from "react-router-dom";
import user from '../../assets/userDefault.jpg'

const Testimonial = () => {
    const navigate = useNavigate();
    const testimonials = [
        {
            name: "Rahima Begum",
            quote: "Thanks to Warm Haven, my children stayed warm throughout the winter.",
            image: user,
        },
        {
            name: "Abdul Karim",
            quote: "Their work has brought hope to our community. Truly inspiring!",
            image: user,
        },
        {
            name: "Maya Rani",
            quote: "Warm Haven’s support made a huge difference in our lives last winter.",
            image: user,
        },
    ];

    return (
        <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 my-6 rounded-xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What People Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="max-w-sm w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
                    >
                        <div className="flex flex-col items-center p-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover mb-4"
                            />
                            <p className="text-gray-700 text-lg italic text-center mb-4">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900">- {testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <button
                    onClick={() => navigate("/donation-campaigns")}
                    className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-md font-bold hover:bg-indigo-700 transition duration-200 text-lg"
                >
                    Get Involved
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
