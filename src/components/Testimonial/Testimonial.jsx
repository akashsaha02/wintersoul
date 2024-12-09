import { useNavigate } from "react-router-dom";
import user from "../../assets/userDefault.jpg";

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
        <div className="bg-gray-50 py-16 px-6 lg:px-12 rounded-xl">
            <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-12">
                What People Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 p-6"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mb-6"
                            />
                            <p className="text-gray-700 text-md italic text-center mb-4">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900">
                                - {testimonial.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <button
                    onClick={() => navigate("/donation-campaigns")}
                    className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg font-bold hover:bg-indigo-700 transition-all duration-300 text-lg"
                >
                    Get Involved
                </button>
            </div>
        </div>
    </div>
    );
};

export default Testimonial;
