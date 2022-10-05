import React from "react";
import Typical from "react-typical";

const Index = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-2xl text-white md:text-5xl md:pr-56">
        <h1 className="font-bold md:text-[70px] mb-2">Tilak Oli</h1>
        <div className="flex md:text-[30px]">
          I am a D
          <span>
            <Typical
              steps={["eveloper", 3000, "esigner", 3000]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
