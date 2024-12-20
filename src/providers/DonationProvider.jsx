import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
// Create Context
const DonationContext = createContext();

// Provider Component
const DonationProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch campaigns from an API
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setCampaigns(data))
            .catch((error) => toast.error('Error fetching campaigns:', error));
    }, []);


    // Function to get campaigns by status
    const getCampaignsByStatus = (status) => campaigns.filter((campaign) => campaign.status === status);

    // Function to get a campaign by ID
    const getCampaignById = (id) => campaigns.find((campaign) => campaign.id === id);

    // Expose data and utility functions
    return (
        <DonationContext.Provider value={{ campaigns, getCampaignsByStatus, getCampaignById }}>
            {children}
        </DonationContext.Provider>
    );
};

// Custom hook for consuming Donation Context
export const useDonation = () => useContext(DonationContext);

export default DonationProvider;
