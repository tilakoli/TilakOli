import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react"; // https://hamburger-react.netlify.app/
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const index = () => {
  const [shouldShowSidebar, setShouldShowSidebar] = useState(true);
  const NavIcons = [
    <AiFillHome />,
    <BsFillPersonFill />,
    <AiFillHome />,
    <BsFillPersonFill />,
    <AiFillHome />,
    <BsFillPersonFill />,
  ];
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
        <div className="w-16 h-screen text-white transition-all duration-700 bg-black opacity-75 md:w-56 ">
          <div className="flex items-center justify-center border-b-8 border-white h-[17%]">
            Top
          </div>

          <div className="flex flex-col items-center justify-start text-[2rem] h-3/5">
            <div className="flex flex-col items-center h-2/3 justify-evenly">
              {NavIcons.map((elem) => {
                return (
                  <div className="flex cursor-pointer justify-evenly hover:text-white">
                    {elem}
                  </div>
                );
              })}
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

export default index;
