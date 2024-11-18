import React from "react";

const Testimonial = () => {
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
        <div className="py-12 bg-gray-100">
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
    );
};

export default Testimonial;
