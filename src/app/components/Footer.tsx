"use client";
import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Subscribed with email:", email);
    setEmail(""); // Reset the email input
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-6 py-12 mx-auto flex flex-wrap items-center justify-between md:flex-row flex-col">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600 cursor-pointer">
              Talha Nisar
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link
              target="_blank"
              href="https://www.linkedin.com"
              className="text-gray-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              <BsLinkedin className="text-3xl hover:scale-110 transform transition-all duration-200" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com"
              className="text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              <BsGithub className="text-3xl hover:scale-110 transform transition-all duration-200" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com"
              className="text-gray-500 hover:text-blue-500 transition-all duration-300 ease-in-out"
            >
              <FaTwitter className="text-3xl hover:scale-110 transform transition-all duration-200" />
            </Link>
            <Link
              target="_blank"
              href="mailto:someone@example.com"
              className="text-gray-500 hover:text-red-500 transition-all duration-300 ease-in-out"
            >
              <BsEnvelope className="text-3xl hover:scale-110 transform transition-all duration-200" />
            </Link>
          </div>

          {/* Email Subscription */}
          <div className="mt-8 sm:flex sm:justify-center w-full">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 w-full sm:w-auto"
            >
              <input
                type="email"
                className="p-3 w-full sm:w-[320px] rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg mt-2 sm:mt-0 hover:bg-blue-700 transform transition-all duration-200 hover:scale-105"
              >
                <RiSendPlaneFill className="mr-2 text-lg" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-blue-900 text-white py-4">
          <div className="container mx-auto text-center">
            <span className="text-sm">© 2023 Talha Nisar. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
