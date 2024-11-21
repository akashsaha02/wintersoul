import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateProfile = async () => {
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
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Banner Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16 text-center p-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {user?.displayName || "User Name"}
          </h1>
          <p className="text-gray-500">{user?.email || "user@example.com"}</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* User Details Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg mt-8 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Profile Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <strong>Name:</strong> {user?.displayName || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Email:</strong> {user?.email || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1234567890 {/* Placeholder */}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Address:</strong> 123, Main Street, City {/* Placeholder */}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Profile
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProfile();
              }}
            >
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
                  onClick={() => setIsEditing(false)}
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
      )}
    </div>
  );
};

export default Dashboard;
