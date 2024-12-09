import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { useDonation } from "../../providers/DonationProvider";
import { AuthContext } from "../../providers/AuthProvider";
import { FaHome, FaClipboard, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const DonationDetails = () => {
    const { checkAuth } = useContext(AuthContext);
    const isAuthenticated = checkAuth();
    const { id } = useParams();
    const { campaigns } = useDonation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState("");
    const [itemType, setItemType] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (campaigns.length > 0) {
            setLoading(false);
        }
    }, [campaigns]);

    const campaign = campaigns.find((campaign) => campaign.id === parseInt(id));

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setQuantity("");
        setItemType("");
        setPickupLocation("");
        setNotes("");
    };

    if (loading) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-600 mb-4">Loading...</h1>
            </div>
        );
    }

    if (!campaign) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Campaign Not Found</h1>
                <Button onClick={() => navigate("/donation-campaigns")} color="blue" ripple={true}>
                    Back to Campaigns
                </Button>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
                <Button onClick={() => navigate("/donation-campaigns")} color="blue" ripple={true}>
                    Back to Campaigns
                </Button>
            </div>
        );
    }

    return (
        <div className="py-10 px-6 max-w-7xl mx-auto">
            {/* Campaign Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <div className="h-60 md:h-96 lg:h-80">
                        <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover center" />
                    </div>
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{campaign.title}</h1>
                        <p className="text-gray-700 mb-2">{campaign.description}</p>
                        <p className="text-gray-600 mb-4">{campaign.longDescription}</p>
                        <div className="text-md text-gray-500 space-y-3">
                            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                                <p className="flex items-center justify-center sm:justify-start px-4 py-2 border border-indigo-500 rounded-xl">
                                    <FaHome className="inline-block h-5 w-5 text-indigo-500 mr-2" />
                                    <strong className="text-indigo-500">Division:</strong>
                                    <span className="ml-1 text-gray-800">{campaign.division}</span>
                                </p>
                                <p className="flex items-center justify-center sm:justify-start px-4 py-2 border border-green-500 rounded-xl">
                                    <FaClipboard className="inline-block h-5 w-5 text-green-500 mr-2" />
                                    <strong className="text-green-600">Status:</strong>
                                    <span className="ml-1 text-gray-700">{campaign.status}</span>
                                </p>
                            </div>

                            <p className="text-black text-lg">
                                <FaMapMarkerAlt className="inline-block h-5 w-5 text-red-500 mr-2" />
                                <strong>Contact:</strong> {campaign.contactInfo}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Donation Form */}
                <Card className="shadow-lg">
                    <CardBody>
                        <Typography variant="h2" className="text-2xl md:text-3xl font-bold text-indigo-500 mb-6 dm">
                            Submit Your Donation
                        </Typography>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    label="Quantity"
                                    type="number"
                                    icon={<FaClipboard className="h-5 w-5 text-gray-400" />}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    label="Item Type"
                                    type="text"
                                    icon={<FaInfoCircle className="h-5 w-5 text-gray-400" />}
                                    value={itemType}
                                    onChange={(e) => setItemType(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    label="Pickup Location"
                                    type="text"
                                    icon={<FaMapMarkerAlt className="h-5 w-5 text-gray-400" />}
                                    value={pickupLocation}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Textarea
                                    label="Additional Notes"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    icon={<FaInfoCircle className="h-5 w-5 text-gray-400" />}
                                />
                            </div>
                            <Button type="submit" color="indigo" ripple={true} fullWidth={true} className=" capitalize text-md dm">
                                Submit Donation
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default DonationDetails;