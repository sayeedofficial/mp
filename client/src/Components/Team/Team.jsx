import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
const Team = () => {
  const projects = [
    {
      name: "Harshitha UK",
      image: "https://i.ibb.co/cb6krNY/1591070856582.jpg",
      linkedin: "https://www.linkedin.com/in/harshitha-u-k/",
      about: "Final Year Computer Science Student",
    },
    {
      name: "Chayashree",
      image: "https://i.ibb.co/JqVZtt0/1616210039486.jpg",
      linkedin: "https://www.linkedin.com/in/nagaditya-l-p-6a364b191/",
      about: "Final Year Computer Science Student",
    },
    {
      name: "Nagaditya LP",
      image: "https://i.ibb.co/v1KrsLg/Aditya-Photo.jpg",
      linkedin: "https://www.linkedin.com/in/sayeedofficial/",
      about: "Final Year Computer Science Student",
    },

    {
      name: "Md Sayeed",
      image: "https://i.ibb.co/1v3JCbd/Sayeed.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-sayeed-b9a9b917b/",
      about: "Final Year Computer Science Student",
    },
  ];
  return (
    <div className="project-cards">
      {projects.map((p) => (
        <TeamCard
          name={p.name}
          image={p.image}
          about={p.about}
          linkedin={p.linkedin}
        />
      ))}
    </div>
  );
};

export default Team;

