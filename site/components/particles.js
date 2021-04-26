import Particles from "react-particles-js";

export default function Particle() {
  return (
    <Particles
      id="particles-js"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1803.4120608655228,
            },
          },
          color: {
            value: "#FFFF",
          },
          shape: {
            type: "image",
            stroke: {
              width: 2,
              color: "#0957F2",
            },
            polygon: {
              nb_sides: 4,
            },
            image: {
              src:
                "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png",
              width: 500,
              height: 500,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 110,
            color: "#7B7B7B",
            opacity: 0.75,
            width: 0.6413648243462091,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "grab",
            },
            resize: false,
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 150,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 75,
              duration: 0.5,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
      width={"100vw"}
      height={"100vh"}
    />
  );
}
