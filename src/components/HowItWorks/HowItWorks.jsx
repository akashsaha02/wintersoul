import donate from "../../assets/donate.svg";
import sort from "../../assets/sort.svg";
import distribute from "../../assets/distribute.svg";

const HowItWorks = () => {
  const steps = [
    {
      title: "Donate",
      description: "Drop off your winter clothing at one of our collection points.",
      icon: donate,
    },
    {
      title: "Sort & Pack",
      description: "Our team carefully sorts and packs donations for distribution.",
      icon: sort,
    },
    {
      title: "Distribute",
      description: "Packages are delivered to underprivileged communities across divisions.",
      icon: distribute,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-indigo-800">
        How It Works
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="max-w-sm p-6 text-center bg-indigo-50 rounded-lg border-2 border-indigo-100">
            <img src={step.icon} alt={step.title} className="w-20 mx-auto py-3" />
            <h3 className="text-xl font-bold text-indigo-800">{step.title}</h3>
            <p className="text-gray-800 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
