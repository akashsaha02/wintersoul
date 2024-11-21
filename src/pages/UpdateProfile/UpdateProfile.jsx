import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!user) {
            setError("User not authenticated.");
            return;
        }

        try {
            await updateProfile(user, {
                displayName: displayName.trim(),
                photoURL: photoURL.trim(),
            });
            setSuccess("Profile updated successfully!");
            setError("");
            navigate("/dashboard"); // Redirect to Dashboard after success
        } catch (err) {
            setError("Failed to update profile. Please try again.");
            setSuccess("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <Helmet>
                <title>WinterSoul | Update Profile</title>
            </Helmet>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Update Profile
                </h2>
                <form onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                        <label
                            htmlFor="displayName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Display Name
                        </label>
                        <input
                            type="text"
                            id="displayName"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
