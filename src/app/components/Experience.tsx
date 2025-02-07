import React from "react";
export default function ExperienceSection() {
    const experiences = [
      {
        company: "TechNova Solutions",
        role: "Frontend Developer Intern",
        duration: "March 2023 - August 2023",
        achievements: [
          "Designed and developed responsive user interfaces using React and Tailwind CSS.",
          "Collaborated with the UX team to optimize website designs for better performance.",
          "Improved website loading time by 30% through efficient code optimization.",
        ],
        certificateLink: "#", // Replace "#" with the actual link to the certificate
      },
      {
        company: "CodeCraft Inc.",
        role: "Full Stack Developer",
        duration: "September 2022 - February 2023",
        achievements: [
          "Implemented RESTful APIs using Node.js and Express to support dynamic content.",
          "Developed reusable components for a multi-page eCommerce application.",
          "Integrated third-party payment gateways for seamless transactions.",
        ],
        certificateLink: "#", // Replace "#" with the actual link to the certificate
      },
      {
        company: "InnoTech Hub",
        role: "Junior Software Engineer",
        duration: "January 2022 - August 2022",
        achievements: [
          "Developed a custom CRM solution for client management, increasing efficiency by 40%.",
          "Wrote unit tests and performed end-to-end testing to ensure robust code quality.",
          "Collaborated with a team of 5 engineers to deliver projects on tight deadlines.",
        ],
        certificateLink: "#", // Replace "#" with the actual link to the certificate
      },
    ];
  
    return (
      <section
        id="experience"
        className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-16 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Professional Experience
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-gray-900"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {exp.company}
                </h3>
                <p className="text-lg font-medium text-gray-700">{exp.role}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-base leading-6">
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  