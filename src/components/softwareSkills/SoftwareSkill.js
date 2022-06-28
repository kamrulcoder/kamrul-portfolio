import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
        <h2>Language</h2>
          {skillsSection.allskills.language.map(skills => {
            return (
              <li className="software-skill-inline" key={skills.classname} name={skills.skillName}>
              <h6>{skills.status}</h6>
                <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          
          <h2>Web Design</h2>
          {skillsSection.allskills.designs.map(skills => {
            return (
              <li className="software-skill-inline" key={skills.classname} name={skills.skillName}>
                <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          <h2>Frontend</h2>
          {skillsSection.allskills.frontends.map(skills => {
            return (
              <li key={skills.classname} className="software-skill-inline" name={skills.skillName}>
                <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          <h2>Backend </h2>
          {skillsSection.allskills.backends.map(skills => {
            return (
              <li key={skills.classname} className="software-skill-inline" name={skills.skillName}>
                <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}


          
          <h2>Tools </h2>
          {skillsSection.allskills.tools.map(skills => {
            return (
              <li key={skills.classname} className="software-skill-inline" name={skills.skillName}>
                <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
