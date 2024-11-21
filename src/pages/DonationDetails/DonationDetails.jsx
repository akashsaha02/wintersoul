import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDonation } from '../../providers/DonationProvider';
import { AuthContext } from '../../providers/AuthProvider';

const DonationDetails = () => {

    const { checkAuth } = useContext(AuthContext);
    const isAuthenticated = checkAuth();
    const { id } = useParams();
    const { campaigns } = useDonation(); // Correctly call useDonation as a function
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState('');
    const [itemType, setItemType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [notes, setNotes] = useState('');

    // Find the specific campaign details by ID
    const campaign = campaigns.find((campaign) => campaign.id === parseInt(id));

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you! We will reach your destination soon.');
        setQuantity('');
        setItemType('');
        setPickupLocation('');
        setNotes('');
    };

    if (!campaign) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-red-600">
                    Campaign not found.
                </h1>
                <button
                    onClick={() => navigate('/donation-campaigns')}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow"
                >
                    Back to Campaigns
                </button>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-red-600">
                    Campaign not found.
                </h1>
                <button
                    onClick={() => navigate('/donation-campaigns')}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow"
                >
                    Back to Campaigns
                </button>
            </div>
        );
    }

    return (
        <div className="py-6">
            {/* Campaign Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full object-cover p-6"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">{campaign.title}</h1>
                    <p className="text-gray-600 mb-2">{campaign.description}</p>
                    <p className="text-gray-600 mb-4">{campaign.longDescription}</p>
                    <p className="text-sm text-gray-500">
                        <strong>Division:</strong> {campaign.division}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                        <strong>Status:</strong> {campaign.status}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Contact:</strong> {campaign.contactInfo}
                    </p>
                </div>
            </div>

            {/* Donation Form Section */}
            <form
                onSubmit={handleSubmit}
                className="mt-8 bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto"
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submit Your Donation</h2>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Quantity
                    </label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        placeholder="e.g., 3 blankets"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Item Type
                    </label>
                    <input
                        type="text"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        placeholder="e.g., sweater"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Pickup Location
                    </label>
                    <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Additional Notes
                    </label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        placeholder="Any additional instructions or notes (optional)"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                    Submit Donation
                </button>
            </form>
        </div>
    );
};

export default DonationDetails;