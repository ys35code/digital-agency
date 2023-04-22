import React from "react";
import spotify from "../spotify.png";
import slack from "../slack.png";
import zoom from "../zoom.png";
import dropbox from "../dropbox.png";

const Company = () => {
  return (
    <div className="companysection">
      <div className="insidecompanydiv">
        <div className="csection-1">
          <p className="companytext">Trusted by 4,000+ companies</p>
        </div>
        <div className="csection-2">
          <div className="spotify">
            <img className="spotify" alt="" src={spotify}></img>
          </div>
          <div className="slack">
            <img className="slack" alt="" src={slack}></img>
          </div>
          <div className="dropbox">
            <img className="dropbox" alt="" src={dropbox}></img>
          </div>
          <div className="zoom">
            <img className="zoom" alt="" src={zoom}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
