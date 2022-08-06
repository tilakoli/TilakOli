import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticlesConfig from "./particles-config";

const Index = () => {
  // const ParticleBackground = () => {
  //   const particlesInit = useCallback(async (engine) => {
  //     console.log(engine);
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     await loadFull(engine);
  //   }, []);

  console.log("somethign");
  return (
    <div>
      <Particles
        options={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
            },
          },
        }}
      ></Particles>
    </div>
  );
};

export default Index;
