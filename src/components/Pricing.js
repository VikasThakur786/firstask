import React from "react";
import "./Pricing.css";
import { PricingData } from "./PricingData";

function Pricing() {
  return (
    <div className="container">
      <h5 className="pricing-heading">Pricing</h5>
      <div className="pricing-cards">
        {PricingData.map((val, key) => {
          console.log(val);
          return (
            <div className="priCard">
              <div className="priCard-heading">{val.heading}</div>
              <div className="priCard-price">{val.price}</div>
              <ul className="priCard-list">
                {val.techList.map((val, key) => {
                  return <li className="item">{val}</li>;
                })}
              </ul>
              <button className="priCard-button">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
