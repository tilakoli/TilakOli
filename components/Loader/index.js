import React from "react";
import { ScatterBoxLoader } from "react-awesome-loaders";

const index = () => {
  return (
    <div className="fixed flex flex-col items-center w-screen h-screen bg-black justify-evenly">
      <p className="text-4xl text-white underline"> Under Development...!!!</p>{" "}
      <ScatterBoxLoader primaryColor={"#6366F1"} background={"#000"} />
    </div>
  );
};

export default index;
