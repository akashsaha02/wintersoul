import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get the email passed from Login, if any
    const [email, setEmail] = useState(location.state?.email || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter your email.');
            return;
        }

        // Redirect user to Gmail for password reset
        window.location.href = "https://mail.google.com/";
        toast.success('Check your email for reset instructions!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-6">
            <Helmet>
                <title>WinterSoul | Reset Password</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Reset Your Password</h2>
                <hr className='my-4'></hr>
                <p className="text-sm text-center text-gray-600">
                    Enter your email below, and we&apos;ll redirect you to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Reset Password
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Remember your password?{' '}
                    <span onClick={() => navigate('/login')} className="text-blue-500 hover:underline cursor-pointer">
                        Go back to login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword
