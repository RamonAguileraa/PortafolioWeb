"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#000000" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ff4dcd" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: "#ff4dcd",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
}
