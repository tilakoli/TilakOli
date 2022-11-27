import React from "react";
import ParticlesEffect from "../ParticlesEffect/Index";
import Navigation from "../Navigation/index";
import SocialLinks from "../Elements/SocialLinks";
import CustomCursor from "../CustomCursor";

const index = ({ children }) => {
  // console.log(props, "children");
  return (
    <div className="relative w-screen h-screen">
      {/* * bg-homeBg * */}
      <div className="-z-50">
        <ParticlesEffect />
      </div>
      <div className="relative flex">
        <div className="relative">
          <Navigation />
        </div>
        <div className="relative flex w-full h-[95vh] md:h-screen">
          <div className="relative flex w-full h-[95vh] md:h-screen mt-10 md:mt-0 items-center justify-center">
            {children}
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
          <CustomCursor />
        </div>
      </div>
    </div>
  );
};

export default index;
