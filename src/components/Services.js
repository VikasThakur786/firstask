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
              <div className="sideicon">
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

      {/* <div className="row">
        <div className="colom-1">
          <div className="card-image green darken-2">
            <i className="material-icons circle darken-2">dashboard</i>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="title">UI/UX Design</div>
            </div>
            <div className="card-action">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </div>
        <div className="colom-2">
          <div className="card horizontal">
            <div className="card-image cyan darken-2">
              <i className="material-icons circle darken-2">web</i>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="title">Web Application</div>
              </div>
              <div className="card-action">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Services;
