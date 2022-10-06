import React from "react";

const Index = () => {
  return (
    <div className="relative items-center flex flex-col w-full h-[100vh] md:h-auto bg-primaryBlack text-white">
      <div className="flex flex-col items-center justify-center w-full gap-5 p-5 mt-12 rounded-lg md:gap-20 md:w-3/4 backdrop-blur-sm bg-black/50 backdropFilter ">
        <div className="w-full h-80">
          <div className="flex bg-red-500 h-5/6 md:flex-col">
            <div>col1</div>
            <div>col2</div>
          </div>
          <div className="bg-red-600 h-1/6">bottom row</div>
        </div>
        <div className="w-full bg-orange-500 h-28">My Interests</div>
        <div className="w-full bg-orange-700 h-28">Testimonials</div>
      </div>
    </div>
  );
};

export default Index;
