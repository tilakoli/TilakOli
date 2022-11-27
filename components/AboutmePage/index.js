import React from "react";

const Index = () => {
  return (
    <div className="relative items-center justify-center flex flex-col w-full h-[100vh] md:h-full  text-white">
      <div className="flex flex-col items-center justify-center w-full gap-5 p-3 rounded-lg md:gap-20 md:w-[88%] backdrop-blur-sm bg-black/50 backdropFilter ">
        <div className="w-full h-80">
          <div className="flex bg-gray-400 h-5/6 md:flex-col">
            <div>col1</div>
            <div>col2</div>
          </div>
          <div className="bg-gray-700 h-1/6">bottom row</div>
        </div>
        <div className="w-full bg-gray-500 h-28">My Interests</div>
        <div className="w-full bg-gray-600 h-28">Testimonials</div>
      </div>
    </div>
  );
};

export default Index;
