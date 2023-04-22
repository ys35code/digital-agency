import React from "react";
import businessman from "./../businessman.png";

const Custom = () => {
  return (
    <div className="customsection">
      <div className="insidecustomdiv">
        <div className="customsection-1">
          <div className="custombigtext">
            <h3>Building digital products, brands & experience</h3>
          </div>
          <p className="customsmalltext">
            Digital Agency is your online team mangement tool that easy and
            prompt
          </p>
          <button className="customcontactusbutton">Contact us</button>
        </div>
        <div className="customsection-2">
          <img alt="" src={businessman}></img>
        </div>
      </div>
    </div>
  );
};

export default Custom;
