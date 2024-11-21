import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';


const HowToHelp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>WinterSoul | How To Help</title>
      </Helmet>
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?winter,help')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            How You Can Help
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-2 text-center">
            Together, we can make this winter warmer for those in need.
          </p>
        </div>
      </div>

      {/* Ways to Help Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Ways You Can Contribute
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore the different ways you can support our mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Option 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Donate Winter Clothes
            </h3>
            <p className="text-gray-600 mt-2">
              Provide warm clothing directly to those in need. Drop-offs are
              available at multiple locations.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
              onClick={() => navigate("/donate")}
            >
              Learn More
            </button>
          </div>
          {/* Option 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Volunteer Your Time
            </h3>
            <p className="text-gray-600 mt-2">
              Help us organize donation drives and distribute clothes to those
              in need.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
              onClick={() => navigate("/volunteer")}
            >
              Sign Up
            </button>
          </div>
          {/* Option 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Sponsor a Campaign
            </h3>
            <p className="text-gray-600 mt-2">
              Support our initiatives financially to make a larger impact this
              winter.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 w-full"
              onClick={() => navigate("/campaigns")}
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Hear From the Community
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <p className="text-gray-600">
              "WinterSoul's donation drive gave me hope during the coldest days. Their kindness is truly inspiring."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - Sarah, Beneficiary
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <p className="text-gray-600">
              "Volunteering with WinterSoul has been a life-changing experience.
              I feel so connected to the community."
            </p>
            <div className="mt-4 text-right text-gray-800 font-semibold">
              - John, Volunteer
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Join Us in Making a Difference
        </h2>
        <p className="mt-2 text-sm md:text-lg">
          Your efforts can warm someone's winter and change their life.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
          onClick={() => navigate("/get-involved")}
        >
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default HowToHelp;
