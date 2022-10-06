import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
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

          <div className="flex flex-col items-center justify-start text-[2rem] h-3/5">
            <div className="flex flex-col items-center h-2/3 justify-evenly">
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <AiFillHome />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <BsFillPersonFill />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <RiProfileFill />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <MdOutlineWork />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <GiNotebook />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-customBlue hover:animate-bounce">
                <HiMail />
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
