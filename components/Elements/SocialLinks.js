import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-end h-full gap-5 pr-8 text-2xl text-white pb-14">
      <div className="hidden h-56 border md:block"></div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <Link href="https://facebook.com">
          <a target="_blank">
            <ImFacebook />
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <Link href="https://instagram.com">
          <a target="_blank">
            <BsInstagram />
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <Link href="https://linkedin.com">
          <a target="_blank">
            <FiLinkedin />
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer hover:text-blue-500">
        <Link href="https://twitter.com">
          <a target="_blank">
            <BsTwitter />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
