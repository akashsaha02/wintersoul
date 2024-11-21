import CountUp from "react-countup";

const Impact = () => {
  return (
    <div>
      <div className="py-6 bg-indigo-600 text-white text-center rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
        <p className="text-lg mb-4 max-w-md mx-auto">
          Over the past 5 years, we’ve distributed over{" "}
          <strong>
            50,000
          </strong>{" "}
          items of winter clothing to families in need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          <div className="text-center bg-black py-6 rounded-xl">
            <h3 className="text-4xl font-bold">
              <CountUp end={10000} duration={2.5} separator="," />+
            </h3>
            <p>Families Helped</p>
          </div>
          <div className="text-center bg-black py-6 rounded-xl">
            <h3 className="text-4xl font-bold">
              <CountUp end={15} duration={2} />+
            </h3>
            <p>Districts Covered</p>
          </div>
          <div className="text-center bg-black py-6 rounded-xl">
            <h3 className="text-4xl font-bold">
              <CountUp end={1000} duration={2.5} separator="," />+
            </h3>
            <p>Volunteers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
