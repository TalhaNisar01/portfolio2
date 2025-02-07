"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am a{" "}
            <span className="font-semibold text-blue-600">
              Web Developer, UI/UX Designer, Geophysicist, GIS Analyst
            </span>
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum soluta
            quod dolore sint fuga vitae architecto quibusdam omnis minima nisi
            assumenda dolores id repudiandae ea necessitatibus illo laboriosam,
            aliquid corporis.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* Improved Image */}
          <Image
            src="/image.jpg" // Reference the image from the public folder
            alt="IT Mate"
            width={300} // Larger width for a better appearance
            height={300} // Same height for a square aspect ratio
            className="rounded-full shadow-lg object-cover mx-auto" // Make the image round with shadow
            priority // Optionally add priority to pre-load the image
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
