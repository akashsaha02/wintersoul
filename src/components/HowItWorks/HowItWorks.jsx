import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Donate",
      description: "Drop off your winter clothing at one of our collection points.",
      icon: "🧥",
    },
    {
      title: "Sort & Pack",
      description: "Our team carefully sorts and packs donations for distribution.",
      icon: "📦",
    },
    {
      title: "Distribute",
      description: "Warm clothes are delivered to underprivileged communities across supported divisions.",
      icon: "🚚",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="max-w-sm p-6 text-center bg-gray-100 rounded-lg shadow">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
