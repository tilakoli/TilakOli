import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-end h-full gap-5 pr-8 text-2xl text-white pb-14">
      <div className="border h-28"></div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <ImFacebook />
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <BsInstagram />
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <FiLinkedin />
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialLinks;
