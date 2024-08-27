import React from "react";
import "../styles/style.css";

function Resume() {
  // front-end skills
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web APIs",
    "OOP",
    "React",
  ];

    // back-end skills
    const backEndSkills = ["Express", "SQL", "ORM", "MVC", "NoSQL", "PWA"];


  return (
    <div className="resume-container">
      <h1 id="bigger">Resume</h1>
      <div className="skills-container">
        <section className="skills-section">
          <h2 class="skills" style={h2Style}>
            Front-End Skills
          </h2>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 class="skills" style={h2Style}>
            Back-End Skills
          </h2>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        </div>
          <h1>Resume</h1>
          <div className="coming-soon">
            <img
              src="\imgs\Coming soon.png"
              alt="Coming Soon"
              className="coming-soon-image"
            />
          </div>
        </div>
  );

  }

export default Resume;