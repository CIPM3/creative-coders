import anime from "animejs/lib/anime.es.js";

export function initializeAnimations() {
  anime({
    targets: ".fade-in-image",
    opacity: [0, 1],
    duration: 800,
    delay: 300,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".headerText",
    translateX: ["-250px", "0px"],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutQuad",
    delay: 300,
  });
}

document.addEventListener("DOMContentLoaded", initializeAnimations);