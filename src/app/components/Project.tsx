import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  imageSrc: string;
  altText: string;
}

const ProjectCard = ({
  title,
  description,
  projectLink,
  imageSrc,
  altText,
}: ProjectCardProps) => (
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="relative group">
      {/* Card Border and Shadow */}
      <div className="relative w-full h-full border-4 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
        {/* Set fixed width and height for Image */}
        <div className="relative w-full" style={{ height: 300 }}> {/* Fixed height */}
          <Image
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={imageSrc}
            width={400} // Fixed width
            height={300} // Fixed height
          />
        </div>
        <div className="px-8 py-10 relative z-10 bg-white opacity-100 group-hover:opacity-90 transition-opacity duration-300">
          <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            {title}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed line-clamp-2">{description}</p>
          <Link target="_blank" href={projectLink}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Project = () => {
  const projects = [
    {
      title: "Catering Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic aspernatur quo laborum suscipit porro aliquid atque quasi.",
      projectLink: "https://catering-dun.vercel.app/",
      imageSrc: "/image1.jpg", // Replace with actual image paths
      altText: "Catering Project",
    },
    {
      title: "Sms Project",
      description:
        "This is the project created for catering business owners. Quisquam exercitationem perferendis, accusamus vitae quia.",
      projectLink: "https://sms-sooty-gamma.vercel.app/",
      imageSrc: "/image1.jpg", // Replace with actual image paths
      altText: "Sms Project",
    },
    {
      title: "Sms Project",
      description:
        "Another project for catering businesses. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      projectLink: "https://sms-sooty-gamma.vercel.app/",
      imageSrc: "/image1.jpg", // Replace with actual image paths
      altText: "Sms Project",
    },
  ];

  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Dynamically render the projects */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                projectLink={project.projectLink}
                imageSrc={project.imageSrc}
                altText={project.altText}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
