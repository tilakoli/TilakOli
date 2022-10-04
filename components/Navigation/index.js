import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react"; // https://hamburger-react.netlify.app/
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const Index = () => {
  const [shouldShowSidebar, setShouldShowSidebar] = useState(true);
  return (
    <>
      <div className="absolute flex items-center justify-end w-screen h-8 p-5 pr-5 md:hidden">
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
        <div className="w-16 h-screen text-white transition-all duration-700 bg-black opacity-75 md:w-52 ">
          <div className="flex items-center justify-center border-b-8 border-white h-[17%]">
            Top
          </div>

          <div className="flex flex-col items-center justify-start text-[2rem] h-3/5">
            <div className="flex flex-col items-center h-2/3 justify-evenly">
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <AiFillHome />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <BsFillPersonFill />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <BsFillPersonFill />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <BsFillPersonFill />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <AiFillHome />
              </div>{" "}
              <div className="flex cursor-pointer justify-evenly hover:text-white">
                <BsFillPersonFill />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t-8 border-white h-[17%]">
            bottom
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
