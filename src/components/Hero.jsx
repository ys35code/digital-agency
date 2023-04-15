import React from "react";
import businessimage from "./../business-people.png";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="insideherodiv">
        <div className="section-1">
          <div className="bigtext">
            <h3>Building digital products, brands & experience</h3>
          </div>
          <p className="smalltext">
            Digital Agency is your online team mangement tool that easy and
            prompt
          </p>
          <button className="contactusbutton">Contact us</button>
        </div>
        <div className="section-2">
          <img alt="" src={businessimage}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
