import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative bg-gray-900 min-h-screen">
        <div className="container mx-auto px-6 pt-36">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Transform your day with {""}
              <span className="text-white">TodoFlow</span>
            </h1>
            <p className="mt-8 text-xl text-gray-300">
              Discover a world of efficiency, unlock your full potential, and
              redefine how you conquer your tasks.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                to="/register"
                className="relative inline-block px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300"
              >
                Get started
              </Link>
              <Link
                to="/home"
                className="relative inline-block px-8 py-4 border border-green-500 text-green-500 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition duration-300"
              >
                Learn more
              </Link>
            </div>
            {/* Add other sections or components as needed */}
          </div>
        </div>
        {/* Footer - Add your footer component here */}
      </div>
    </>
  );
}
