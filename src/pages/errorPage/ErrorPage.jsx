import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
      {/* Big 404 Text */}
      <h1 className="text-8xl md:text-9xl font-extrabold drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      {/* Description */}
      <p className="text-center mt-2 max-w-md text-gray-200">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;