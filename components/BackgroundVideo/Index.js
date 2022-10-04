import React from "react";

const Index = () => {
  return (
    <>
      <div className="w-full h-screen">
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Index;
