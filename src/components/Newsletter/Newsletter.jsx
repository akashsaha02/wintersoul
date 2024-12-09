const Newsletter = () => {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50" >
      {/* Gradient Overlay */}
      <div className=""></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl md:text-5xl text-indigo-800 font-bold mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-lg mb-6">
          Sign up for our newsletter to receive updates on donation campaigns, success stories, and ways you can help make a difference.
        </p>
        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-lg text-gray-800 border-gray-500 border focus:ring-2 focus:ring-indigo-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            color="indigo"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
