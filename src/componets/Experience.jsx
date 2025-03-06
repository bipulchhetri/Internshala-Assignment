import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    { role: "Lead Product Designer", company: "Fortknox", duration: "Mar 2022 - Oct 2023" },
    { role: "Intern Designer", company: "OmniSafe", duration: "Mar 2022 - Oct 2023" },
    { role: "UI Designer", company: "Doradesign", duration: "Mar 2022 - Oct 2023" },
    { role: "Frontend Developer", company: "OpacityAuthor", duration: "Mar 2022 - Oct 2023" },
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title"> Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <span className="role">{exp.role}</span>
            <div className="right">
              <span className="company">{exp.company}</span>
              <span className="duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;


