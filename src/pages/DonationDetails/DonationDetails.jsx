import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'; // Toast library for messages

const DonationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState('');
    const [itemType, setItemType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // toast.success('Thank you! We will reach your destination soon.');
        alert('Thank you! We will reach your destination soon.');
        setQuantity('');
        setItemType('');
        setPickupLocation('');
        setNotes('');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Donation Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="block text-sm">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm">Item Type</label>
                    <input
                        type="text"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm">Pickup Location</label>
                    <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm">Additional Notes</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full mt-6 py-2 bg-blue-600 text-white rounded">Submit Donation</button>
            </form>
        </div>
    );
};

export default DonationDetails;
