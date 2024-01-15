import React from "react";
import BannerImage from "../assets/1beef.jpg";

function about() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {" "}
      </div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vulputate dictum diam, a accumsan elit feugiat sed. Nunc et
          pellentesque metus, non pharetra lacus.{" "}
        </p>
      </div>
    </div>
  );
}

export default about;
