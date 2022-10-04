import React from "react";
import Typical from "react-typical";

const Index = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-5xl text-white md:pr-56">
        <h1 className="font-bold text-[70px] mb-2">Tilak Oli</h1>
        <div className="flex gap-1 text-[30px]">
          I am a
          <span>
            <Typical
              steps={["Developer", 3000, "Designer", 3000]}
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
