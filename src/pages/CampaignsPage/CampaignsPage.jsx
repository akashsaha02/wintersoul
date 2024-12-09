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
      <div className="">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800" >
                  {campaign.title}
                </h2>
                <p className="text-gray-600 line-clamp-2 my-2" >
                  {campaign.longDescription}
                </p>
                <p className=" text-sm my-4 font-bold flex gap-2 items-center">
                  <span className="bg-purple-50 text-purple-800 border border-purple-800 px-4 py-1 rounded-lg">
                    {campaign.division}
                  </span>
                  <span
                    className={`px-4 py-1 rounded-lg ${campaign.status === 'Ongoing'
                      ? 'bg-green-50 text-green-800 border border-green-800'
                      : campaign.status === 'Completed'
                        ? 'bg-red-50 text-red-800 border border-red-800'
                        : campaign.status === 'Upcoming'
                          ? 'bg-orange-50 text-orange-800 border border-orange-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    {campaign.status}
                  </span>
                </p>
                <div className="flex justify-between items-center font-bold" >
                  <Link
                    to={`/donation-campaigns/${campaign.id}`}
                    className="text-indigo-500 hover:underline text-md"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/donation-campaigns/${campaign.id}`}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 text-md"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
