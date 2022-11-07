import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import ReactTooltip from "react-tooltip";

const Index = () => {
  const [shouldShowSidebar, setShouldShowSidebar] = useState(true);
  return (
    <>
      <div className="absolute z-50 flex items-center justify-end w-screen h-8 p-5 pr-5 md:hidden">
        <button>
          <Hamburger
            toggled={shouldShowSidebar}
            rounded
            color="#fff"
            onToggle={() => setShouldShowSidebar(!shouldShowSidebar)}
          />
        </button>
      </div>
      {shouldShowSidebar && (
        <div className="w-16 h-screen transition-all duration-700 text-creamyWhite md:w-44 backdrop-blur-sm bg-black/30">
          <div className="flex items-center justify-center border-b-8 border-creamyWhite h-[17%]">
            Top
          </div>

          <div className="flex flex-col items-center justify-between text-[2rem] h-3/5">
            <div className="flex flex-col items-center h-2/3 justify-evenly">
              <div
                data-tip
                data-for="homeIcon"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <AiFillHome />
              </div>
              <div
                data-tip
                data-for="about"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <BsFillPersonFill />
              </div>
              <div
                data-tip
                data-for="resume"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <RiProfileFill />
              </div>
              <div
                data-tip
                data-for="work"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <MdOutlineWork />
              </div>
              <div
                data-tip
                data-for="blogs"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <GiNotebook />
              </div>
              <div
                data-tip
                data-for="contact"
                className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce"
              >
                <HiMail />
              </div>
              <div>
                <ReactTooltip id="homeIcon" place="top" effect="solid">
                  Home
                </ReactTooltip>
                <ReactTooltip id="about" place="top" effect="solid">
                  About Me
                </ReactTooltip>
                <ReactTooltip id="resume" place="top" effect="solid">
                  Resume
                </ReactTooltip>
                <ReactTooltip id="work" place="top" effect="solid">
                  Work
                </ReactTooltip>
                <ReactTooltip id="blogs" place="top" effect="solid">
                  Blogs
                </ReactTooltip>
                <ReactTooltip id="contact" place="top" effect="solid">
                  Contact
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t-8 border-creamyWhite h-[17%]">
            bottom
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
