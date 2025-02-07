"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCloudDownload, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white z-50 sticky top-0 shadow-lg">
      <header className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        {/* Logo and Title */}
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">Talha Nisar</span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="ml-auto md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:ml-auto w-full md:w-auto items-center text-center`}
        >
          <Link
            href="/"
            className="mr-5 text-lg font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="mr-5 text-lg font-medium hover:text-blue-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="mr-5 text-lg font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="#project"
            className="mr-5 text-lg font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#Contact"
            className="mr-5 text-lg font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Download CV Button */}
        <a
          href="/assests/cv/myCv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0"
        >
          <button className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            Download CV
            <AiOutlineCloudDownload className="text-xl ml-2" />
          </button>
        </a>
      </header>
    </div>
  );
};

export default Navbar;
