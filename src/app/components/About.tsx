import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[300px] h-[300px] shadow-xl transition-all transform hover:scale-110 hover:rotate-12 duration-500 ease-in-out" // Enhanced image with rotation on hover
              alt="About Me"
              src="/image.jpg"
              width={300}
              height={300}
            />
          </div>
          
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105">
              About Me
            </h1>
            <div className="w-[60px] h-[2px] bg-white mb-6"></div> {/* Accent line */}
            <p className="mb-5 leading-relaxed text-lg text-white opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">
              I'm a passionate professional with a diverse skill set in web development, UI/UX design, geophysics, and GIS analysis. 
              With years of experience in solving real-world problems through technology, I'm committed to continuous growth and delivering high-quality results.
            </p>
            <p className="mb-5 leading-relaxed text-lg text-white opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">
              My approach combines creativity and analytical thinking to design intuitive user interfaces, develop robust web applications, and analyze geospatial data for impactful insights.
            </p>
            <div className="flex justify-center">
              {/* CV Button with smooth hover effect */}
              <a href="/assests/cv/myCv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-blue-600 border-0 py-3 px-10 focus:outline-none hover:bg-blue-700 rounded-full shadow-lg hover:shadow-2xl text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  View My CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
