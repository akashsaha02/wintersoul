import React from "react";
import { Link } from "react-router-dom";
import { useDonation } from "../../providers/DonationProvider";

const CampaignsPage = () => {
  const { campaigns } = useDonation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Donation Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{campaign.title}</h2>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <Link
                to={`/donation-campaigns/${campaign.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;
