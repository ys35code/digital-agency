import React from "react";
import businessimage from "./../business-people.png";

const Branding = () => {
  return (
    <div className="bsection">
      <div className="insidebdiv">
        <div className="bsection-1">
          <div className="bbigtext">
            <h3>Building digital products, brands & experience</h3>
          </div>
          <p className="bsmalltext">
            Digital Agency is your online team mangement tool that easy and
            prompt
          </p>
          <button className="bcontactusbutton">Contact us</button>
        </div>
        <div className="bsection-2">
          <img alt="" src={businessimage}></img>
        </div>
      </div>
    </div>
  );
};

export default Branding;
