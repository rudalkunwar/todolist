import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Bharatpur-15 Chitwan, Nepal
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            98xxxxxxxxx
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@todoflow.com
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue-600 mb-2">
              <Link to="#about">About Us</Link>
            </li>
            <li className="hover:text-blue-600 mb-2">
              <Link to="#services">Services</Link>
            </li>
            <li className="hover:text-blue-600 mb-2">
              <Link to="#">FAQ</Link>
            </li>
            <li className="hover:text-blue-600 mb-2">
              <Link to="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <ul className="list-reset flex justify-start">
            <li>
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-600 px-3">
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" className="text-gray-400 hover:text-blue-600 px-3">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-blue-600 px-3">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" className="text-gray-400 hover:text-blue-600 px-3">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center text-gray-300">&copy; 2023 Todoflow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
