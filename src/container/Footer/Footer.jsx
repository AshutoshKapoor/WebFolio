import React from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-body">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.gmail} alt="Email" />
            <div>
              <p className="bold-text">Email</p>
              <p className="p-text">ashutosh1kapoor@gmail.com</p>
            </div>
          </div>
          <div className="app__footer-card">
            <img src={images.telephone} alt="Phone" />
            <div>
              <p className="bold-text">Phone</p>
              <p className="p-text">+91 9660488660</p>
            </div>
          </div>
          <div className="app__footer-card">
            <img src={images.address} alt="Address" />
            <div>
              <p className="bold-text">Address</p>
              <p className="p-text">Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
