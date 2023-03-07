import React from "react";
import Particles from "react-tsparticles";
import {Engine} from "tsparticles-engine";
import {loadLinksPreset} from "tsparticles-preset-links";
import {useTheme} from "@mui/material";

const ParticlesContainer = () => {
    const theme = useTheme()

    const customParticlesInit = async (engine: Engine): Promise<void> => {
        // this adds the preset to tsParticles, you can safely use the
        await loadLinksPreset(engine);
    }

    return (<Particles id="tsparticle" init={customParticlesInit}
                      options={{
                          fpsLimit: 60,
                          particles: {
                              number: {
                                  value: 30,
                                  density: {
                                      enable: true,
                                      value_area: 800
                                  }
                              },
                              opacity: {
                                  value: 0.5,
                              },
                              color: {
                                  value: [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.error.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.success.main],
                              },
                              shape: {
                                  type: "circle",
                                  stroke: {
                                      width: 0,
                                      color: "#000000"
                                  },
                                  polygon: {
                                      nb_sides: 5
                                  },
                                  image: {
                                      src: "https://cdn.matteobruni.it/images/particles/github.svg",
                                      width: 100,
                                      height: 100
                                  }
                              },
                              size: {
                                  value: 5,
                                  anim: {
                                      enable: false,
                                      speed: 20,
                                      size_min: 0.1,
                                      sync: false
                                  }
                              },
                              line_linked: {
                                  enable: true,
                                  distance: 200,
                                  random: true,
                                  color: [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.error.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.success.main],
                                  opacity: 0.75,
                                  width: 1,
                              },
                              move: {
                                  enable: true,
                                  speed: 3,
                                  direction: "none",
                                  random: false,
                                  straight: false,
                                  out_mode: "bounce",
                                  attract: {
                                      enable: false,
                                      rotateX: 600,
                                      rotateY: 1200
                                  }
                              }
                          },
                          interactivity: {
                              detect_on: "canvas",
                              events: {
                                  onhover: {
                                      enable: true,
                                      mode: "repulse"
                                  },
                                  onclick: {
                                      enable: true,
                                      mode: "push"
                                  },
                                  resize: true
                              },
                              modes: {
                                  grab: {
                                      distance: 400,
                                      line_linked: {
                                          opacity: 1
                                      }
                                  },
                                  bubble: {
                                      distance: 400,
                                      size: 40,
                                      duration: 2,
                                      opacity: 0.8,
                                      speed: 3
                                  },
                                  repulse: {
                                      distance: 200
                                  },
                                  push: {
                                      particles_nb: 4
                                  },
                                  remove: {
                                      particles_nb: 2
                                  }
                              }
                          },
                          retina_detect: true,
                      }}/>);
};

export default ParticlesContainer;