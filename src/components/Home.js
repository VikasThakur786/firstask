import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img
            className="background"
            src={`${process.env.PUBLIC_URL}/assets/images/user-profile-bg.jpg`}
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="row">
            <div className="col-1">
              <figure className="card-profile-image">
                <img
                  className="avtar"
                  src={`${process.env.PUBLIC_URL}/assets/images/man.png`}
                  alt=""
                />
              </figure>
              <div className="card-profile-desc">
                <h6 className="card-title">Sean Stevenson</h6>
                <p className="medium-small grey-text">Front-end Developer</p>
              </div>
            </div>
            <div className="col-1 col-2">
              <h4 className="card-title grey-text text-darken-4">96%</h4>
              <p className="medium-small grey-text">Jobs Completed</p>
            </div>
            <div className="col-1 col-3">
              <h4 className="card-title grey-text text-darken-4">10</h4>
              <p className="medium-small grey-text">Years Experience</p>
            </div>
            <div className="col-1 col-4">
              <h4 className="card-title grey-text text-darken-4">$25</h4>
              <p className="medium-small grey-text">USD/hr</p>
            </div>
          </div>
        </div>
      </div>

      <div className="four-cards">
        <div className="row">
          <div className="small-tags">
            <p> 480+</p>
            <p>Happy Clients</p>
          </div>
          <div className="small-tags" style={{ backgroundColor: "#0097A7" }}>
            <p>400+</p>
            <p>Completed Projects</p>
          </div>
          <div className="small-tags" style={{ backgroundColor: "#D32F2F" }}>
            <p>100 000+</p>
            <p>Lines of Code</p>
          </div>
          <div className="small-tags" style={{ backgroundColor: "#FFA000" }}>
            <p>1000+</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
