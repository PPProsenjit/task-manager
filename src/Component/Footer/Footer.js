import React from "react";
import {
  FaFacebook,
  FaInstagram,  
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 sm:mt-10 pt-10 mt-0">
      <div className="max-w-6xl m-auto text-gray-200 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Task Manager App
          </div>
          <p className="my-3 block text-gray-200 text-sm">
            ©prosenjit 2023, Inc. All rights reserved.
          </p>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-200 font-medium mb-6">
            Links
          </div>
          <ul className="my-3">
            <li>
              <Link
                to="/about"
                className="text-gray-200 hover:text-green-500 text-sm block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-200 hover:text-green-500 text-sm block"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-green-500 text-sm block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-200 hover:text-green-500 text-sm block"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>
          <ul className="flex -ml-2">
            <li className="px-2">
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <FaFacebook className="text-blue-600" />
              </Link>
            </li>
            
            <li className="px-2">
              <Link to="#" className="text-gray-500 hover:text-green-500">
                <FaInstagram className="text-pink-700" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;