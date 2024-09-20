
import anime from "animejs/lib/anime.es.js";

function animateServiceItems(container) {
  container.querySelectorAll('.proyect-item').forEach((item, index) => {
    anime({
      targets: item,
      translateY: [-80, 0],
      opacity: [0, 1],
      duration: 800,
      delay: index * 300,
      easing: "easeOutQuad",
    });
  });

  container.querySelectorAll('.framework-item').forEach((item,index)=>{
    anime({
        targets: item,
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: index * 300,
        easing: "easeOutQuad",
      });
  })
}

function resetServiceItems(container) {
  container.querySelectorAll('.service-item').forEach((item) => {
    anime.set(item, {
      translateX: -80,
      opacity: 0
    });
  });
  container.querySelectorAll('.framework-item').forEach((item)=>{
    anime.set(item, {
        translateX: -20,
        opacity: 0
      });
  });
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateServiceItems(entry.target);
      } else {
        resetServiceItems(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.proyects-section').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", setupIntersectionObserver);