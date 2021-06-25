import React from "react";
import "./Education.css";
import { EducationData } from "./EducationData";

function Education() {
  return (
    <>
      <div className="container">
        <h5 className="education-heading">Experience & Education</h5>
        <div className="education-cards">
          {EducationData.map((val, key) => {
            return (
              <div className="edcard">
                <div className="edcard-header">
                  {val.icon}
                  {val.heading}
                  <span className="tag">{val.headingtag}</span>
                  <span className="right-text">{val.date}</span>
                </div>
                <div className="edcard-content">
                  <p className="edetail">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
