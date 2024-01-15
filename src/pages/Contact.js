import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide"></div>
      <h1>Contact Us</h1>
      <form id="contact-form">
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          placeholder="Enter full name.... "
          type="text"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name="mail"
          placeholder="Enter an mail.... "
          type="email"
        ></input>
        <label htmlFor="message">Full Name</label>
        <textarea
          name="message"
          placeholder="Enter your message.... "
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
