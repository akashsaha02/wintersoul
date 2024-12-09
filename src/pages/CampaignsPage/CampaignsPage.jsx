import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDonation } from "../../providers/DonationProvider";
import bgImg from "../../assets/360_F_843622716_EBd9rtjvMJjHezFV0bTEPrOQ5LZ88p1S.jpg";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const CampaignsPage = () => {
  const { campaigns } = useDonation();

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
        <title>WinterSoul | Donation Campaigns</title>
      </Helmet>
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center my-6 rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
        data-aos="fade-up" // Apply animation on scroll
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Donation Campaigns
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-2 text-center">
            Together, we can make this winter warmer for those in need.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
            data-aos="fade-up" // Apply animation to each campaign card
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-56 object-cover"
              data-aos="zoom-in" // Zoom-in effect on image
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800" data-aos="fade-up">
                {campaign.title}
              </h2>
              <p className="text-gray-600 line-clamp-1 my-2" data-aos="fade-up">
                {campaign.description}
              </p>
              <p className=" text-sm my-4 font-bold flex gap-2 items-center " data-aos="fade-up">
                <span className="bg-green-200 text-green-800 px-4 py-1 rounded-lg">
                  {campaign.division}
                </span>
                <span
                  className={`px-4 py-1 rounded-lg ${campaign.status === 'Ongoing'
                      ? 'bg-purple-200 text-purple-800'
                      : campaign.status === 'Completed'
                        ? 'bg-blue-200 text-blue-800'
                        : campaign.status === 'Upcoming'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-gray-200 text-gray-800'
                    }`}
                >
                  {campaign.status}
                </span>
              </p>
              <div className="flex justify-between items-center font-bold" data-aos="fade-up">
                <Link
                  to={`/donation-campaigns/${campaign.id}`}
                  className="text-indigo-500 hover:underline text-md"
                >
                  View Details
                </Link>
                <Link
                  to={`/donation-campaigns/${campaign.id}`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 text-md"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;
