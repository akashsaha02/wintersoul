import CountUp from "react-countup";

const Impact = () => {
  return (
    <div className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-indigo-800">
          Our Impact
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700">
          Over the past 5 years, we’ve distributed over{" "}
          <strong className="text-indigo-700">50,000</strong> items of winter
          clothing to families in need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Families Helped */}
          <div className="flex flex-col items-center bg-indigo-50 py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-indigo-800 mb-2">
              <CountUp end={10000} duration={2.5} separator="," />+
            </h3>
            <p className="text-md text-gray-700">Families Helped</p>
          </div>
          {/* Districts Covered */}
          <div className="flex flex-col items-center bg-indigo-50 py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-indigo-800 mb-2">
              <CountUp end={15} duration={2} />+
            </h3>
            <p className="text-md text-gray-700">Districts Covered</p>
          </div>
          {/* Volunteers */}
          <div className="flex flex-col items-center bg-indigo-50 py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-indigo-800 mb-2">
              <CountUp end={1000} duration={2.5} separator="," />+
            </h3>
            <p className="text-md text-gray-700">Volunteers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
