import { Link } from "react-router-dom";
import { useDonation } from "../../providers/DonationProvider";

const CampaignsPage = () => {
  const { campaigns } = useDonation();

  return (
    <div className="">
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?winter,help')" }}
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
      <h1 className="text-3xl font-bold mb-6">Donation Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <h2 className="text-xl font-semibold text-gray-800">{campaign.title}</h2>
              <p className="text-gray-600 line-clamp-1 my-2">{campaign.description}</p>
              <p className=" text-sm my-4 font-bold flex gap-2 items-center ">
                <span className="bg-green-200 text-green-800 px-4 py-1 rounded-lg">
                  {campaign.division}
                </span>
                <span className="bg-purple-200 text-purple-800 px-4 py-1 rounded-lg">
                  {campaign.status}
                </span>
              </p>
              <div className="flex justify-between items-center font-bold">
                <Link
                  to={`/donation-campaigns/${campaign.id}`}
                  className="text-indigo-500 hover:underline text-md"
                >
                  View Details
                </Link>
                <button
                  onClick={() => navigate(`/donation-campaigns/${campaign.id}`)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 text-md"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;
