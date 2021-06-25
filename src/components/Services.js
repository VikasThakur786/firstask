import React from "react";
import "./Services.css";
import { ServicesData } from "./ServicesData";

function Services() {
  return (
    <div className="container">
      <h5 className="service-heading">Services</h5>
      <div className="services-cards">
        {ServicesData.map((val, key) => {
          return (
            <div className="servcard">
              <div className="sideicon" style={val.style}>
                <span className="icon-set">{val.sideicon}</span>
              </div>
              <div className="servheading">
                <span className="heading-set">{val.heading}</span>
              </div>
              <div className="servinfo">
                <span className="info-set">{val.info}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
