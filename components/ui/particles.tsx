"use client"

import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ["#3b82f6", "#8b5cf6", "#ec4899"],
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;