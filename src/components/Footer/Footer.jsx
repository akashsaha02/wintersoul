const Footer = () => {
    return (
        <div className="bg-gray-900 mt-10">
            <footer className=" text-white py-10 max-w-[1440px] mx-auto">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    {/* About Us */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">About WinterSoul</h2>
                        <p className="text-gray-400">
                            WinterSoul connects donors with communities in need across Bangladesh, providing warm clothing during the harsh winter months. Together, we can make a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/campaigns" className="text-gray-400 hover:text-white">
                                    Donation Campaigns
                                </a>
                            </li>
                            <li>
                                <a href="/how-to-help" className="text-gray-400 hover:text-white">
                                    How to Help
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className="text-gray-400 hover:text-white">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-400">
                            <span className="block mb-2">Email: support@wintersoul.org</span>
                            <span className="block mb-2">Phone: +880-123-456-789</span>
                            <span className="block">Address: Dhaka, Bangladesh</span>
                        </p>
                    </div>
                </div>

                {/* Social Media and Copyright */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-facebook fa-lg"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} WinterSoul. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>

    )
}

export default Footer
