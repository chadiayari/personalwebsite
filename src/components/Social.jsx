import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/chadi.ayari.1/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/ayari_chadi/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/chadi-ayari-7a11a6157/" },
  { Social: <FaGithub />, link: "https://github.com/chadiayari" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
