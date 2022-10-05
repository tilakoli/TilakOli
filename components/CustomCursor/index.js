import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const index = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  const variants = {
    hidden: {},
    default: {
      x: mousePosition.x - 190,
      y: mousePosition.y - 30,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="default"
      className="fixed items-center justify-center hidden w-10 h-10 text-center transition-all duration-75 border-2 rounded-full pointer-events-none md:flex z-80 text-md content-none border-primary"
    >
      {/* <motion.div className="relative w-2 h-2 bg-white rounded-full"></motion.div> */}
    </motion.div>
  );
};

export default index;
