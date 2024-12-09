import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import bgImg from "../../assets/Sprinkle.svg";

const HowToHelp = () => {
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>WinterSoul | How To Help</title>
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center my-6 rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4"
          data-aos="  fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            How You Can Help
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-2 text-center">
            Together, we can make this winter warmer for those in need.
          </p>
        </div>
      </div>

      {/* Ways to Help Section */}
      <div
        className="py-12 px-4 sm:px-6 lg:px-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Ways You Can Contribute
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore the different ways you can support our mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Option 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-gray-800">
              Donate Winter Clothes
            </h3>
            <p className="text-gray-600 mt-2">
              Provide warm clothing to those in need. Drop-offs are
              available at multiple locations.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
              onClick={() => navigate("/donation-campaigns")}
            >
              Learn More
            </button>
          </div>

          {/* Option 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800">
              Volunteer Your Time
            </h3>
            <p className="text-gray-600 mt-2">
              Help us organize donation drives and distribute clothes to those
              in need.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-gray-800">
              Sponsor a Campaign
            </h3>
            <p className="text-gray-600 mt-2">
              Support our initiatives financially to make a larger impact this
              winter.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 w-full"
              onClick={() => navigate("/donation-campaigns")}
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        className="py-12 px-4 sm:px-6 lg:px-16"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Hear From the Community
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* Testimonial 1 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-right"
          >
            <p className="text-gray-600">
              "WinterSoul's donation drive gave me hope during the coldest days. Their kindness is truly inspiring."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - Sarah, Beneficiary
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-left"
          >
            <p className="text-gray-600">
              "Volunteering with WinterSoul has been a life-changing experience. I feel so connected to the community."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - John, Volunteer
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-right"
          >
            <p className="text-gray-600">
              "I received warm clothing when I needed it most. I’m forever grateful to WinterSoul."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - Maria, Beneficiary
            </div>
          </div>

          {/* Testimonial 4 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-left"
          >
            <p className="text-gray-600">
              "Collaborating with WinterSoul has brought our community closer. We’ve achieved so much together."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - Ahmed, Partner
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white px-4 rounded-lg mb-6"
       data-aos="fade-in"
      >
        <div className=""
         data-aos="fade-in"
         data-aos-delay="400"
         data-aos-delay="400"
 
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Join Us in Making a Difference
          </h2>
          <p className="mt-2 text-sm md:text-lg">
            Your efforts can warm someone's winter and change their life.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            onClick={() => navigate("/donation-campaigns")}
          >
            Get Involved
          </button>
        </div>
      </div>

    </div>
  );
};

export default HowToHelp;
