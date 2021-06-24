import React from "react";
import "./Portfolio.css";
import { PortfolioData } from "./PortfolioData";

function Portfolio() {
  return (
    <div className="container">
      <h5 className="portfolio-heading">Portfolio</h5>
      <div className="portfolio-cards">
        {PortfolioData.map((val, key) => {
          return (
            <div className="pfcard">
              <div>
                <img className="pfcard-image" src={val.image} alt="" />
              </div>
              <div className="pfcard-content">
                <span className="content-heading">{val.heading}</span>
                <span className="content-tag">{val.tag}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
