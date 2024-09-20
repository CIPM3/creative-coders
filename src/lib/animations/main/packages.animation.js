import anime from 'animejs/lib/anime.es.js';

function setupPackagesAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const cards = entry.target.querySelectorAll('.package-card');
      
      if (entry.isIntersecting) {
        // Animate in
        anime({
          targets: cards,
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: anime.stagger(300),
          easing: 'easeOutQuad',
        });
      } else {
        // Reset when out of view
        anime.set(cards, {
          opacity: 0,
          translateY: 50
        });
      }
    });
  }, { threshold: 0.1 });

  const packagesSection = document.querySelector('.packages-section');
  if (packagesSection) {
    observer.observe(packagesSection);
  }

  // Return a cleanup function
  return () => {
    if (packagesSection) {
      observer.unobserve(packagesSection);
    }
  };
}

export { setupPackagesAnimation };