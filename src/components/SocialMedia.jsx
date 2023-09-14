import React from "react";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { socialLinks } from "../constants";

const { instaLink, gitLink, linkedInLink } = socialLinks;

const handleInstaClick = () => {
  window.open(instaLink, "_blank");
};

const handleGitClick = () => {
  window.open(gitLink, "_blank");
};
const handleLinkedinClick = () => {
  window.open(linkedInLink, "_blank");
};


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: "pointer" }}>
        <BsLinkedin onClick={handleLinkedinClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsGithub onClick={handleGitClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsInstagram onClick={handleInstaClick} />
      </div>
    </div>
  );
};

export default SocialMedia;
