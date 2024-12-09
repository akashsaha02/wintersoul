import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Impact = () => {
  return (
    <div className="bg-gray-50">

      <div className="py-16  text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-indigo-800">
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
                <CountUp end={36000} duration={10} separator="," />+
              </h3>
              <p className="text-md text-gray-700">Families Helped</p>
            </div>
            {/* Districts Covered */}
            <div className="flex flex-col items-center bg-indigo-50 py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-indigo-800 mb-2">
                <CountUp end={44} duration={10} />+
              </h3>
              <p className="text-md text-gray-700">Districts Covered</p>
            </div>
            {/* Volunteers */}
            <div className="flex flex-col items-center bg-indigo-50 py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-indigo-800 mb-2">
                <CountUp end={1200} duration={10} separator="," />+
              </h3>
              <p className="text-md text-gray-700">Volunteers</p>
            </div>
          </div>
        </div>
        {/* Call to Action */}

      </div>
      <div className="flex justify-center items-center py-8" data-aos="zoom-in">
        <Link
          to="/donation-campaigns"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Impact;
