export default function Achievements() {
    const achievements = [
      {
        title: "Google Cybersecurity Certificate",
        description:
          "Completed a hands-on course by Google on Cybersecurity, covering Python, Linux, SQL, SIEM tools, and intrusion detection systems.",
        date: "July 2024",
        certificateLink: "#", // Replace "#" with actual certificate link
      },
      {
        title: "Walmart's Forage Program",
        description:
          "Solved technical projects for Walmart, developed a custom heap data structure, and designed a UML class diagram and ER diagram for their operations.",
        date: "June 2024",
        certificateLink: "#", // Replace "#" with actual certificate link
      },
      {
        title: "React Internship at internee.pk",
        description:
          "Gained practical experience in React, including Firebase integration, Redux state management, and responsive UI design.",
        date: "September 2024",
        certificateLink: "#", // Replace "#" with actual certificate link
      },
    ];
  
    return (
      <section
        id="achievements"
        className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-16 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Achievements & Certifications
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-gray-900"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  {achievement.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">{achievement.date}</p>
                <div>
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 transition duration-300 ease-in-out"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  