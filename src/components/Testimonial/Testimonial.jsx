import { useNavigate } from "react-router-dom";

const Testimonial = () => {
    const navigate = useNavigate();
    const testimonials = [
        {
            name: "Rahima Begum",
            quote: "Thanks to Warm Haven, my children stayed warm throughout the winter.",
        },
        {
            name: "Abdul Karim",
            quote: "Their work has brought hope to our community. Truly inspiring!",
        },
        {
            name: "Maya Rani",
            quote: "Warm Haven’s support made a huge difference in our lives last winter.",
        },
    ];

    return (
        <div className="">
            <div className="py-12 bg-gray-100 my-10">

                <h2 className="text-3xl font-bold text-center mb-6">What People Say</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                            <p className="italic text-gray-700">"{testimonial.quote}"</p>
                            <h3 className="mt-4 font-bold text-right text-gray-900">- {testimonial.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
            <div className=" flex justify-center items-center py-6">
                <button onClick={() => navigate("/donation-campaigns")} className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 text-lg">
                    Get Involved
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
