

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";


const Dashboard = () => {
    const { user,logoutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success("Logged out successfully!");
            navigate("/");
        } catch {
            toast.error("Error", "Error logging out!", "error");
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300">
            <Helmet>
                <title>WinterSoul | Dashboard</title>
            </Helmet>
            {/* Dashboard Container */}
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Banner Section */}
                <div className="relative">
                    <div className="h-32 bg-gradient-to-r from-indigo-500 to-cyan-600"></div>
                    <div className="absolute inset-x-0 -bottom-12 flex justify-center">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
                        />
                    </div>
                </div>
                {/* User Information */}
                <div className="text-center mt-16 p-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {user?.displayName || "Welcome, User"}
                    </h1>
                    <p className="text-gray-600 mt-2">{user?.email || "user@example.com"}</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={() => navigate("/update-profile")}
                            className="px-6 py-2 bg-indigo-500 text-white text-sm font-medium rounded-full hover:bg-indigo-600 shadow-md transition duration-300"
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={() => navigate("/donation-campaigns")}
                            className="px-6 py-2 bg-cyan-500 text-white text-sm font-medium rounded-full hover:bg-cyan-600 shadow-md transition duration-300"
                        >
                            View Campaigns
                        </button>
                        <button
                            onClick={() => handleLogout()}
                            className="px-6 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 shadow-md transition duration-300"
                        >
                            Log out
                        </button>
                    </div>

                </div>
                {/* Footer */}
                <div className="bg-gray-50 border-t border-gray-200 p-4">
                    <p className="text-center text-sm text-gray-500">
                        Need help? <a href="/support" className="text-indigo-500 hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
