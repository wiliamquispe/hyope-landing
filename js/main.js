document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('mainNav');

  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  };

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  document.querySelectorAll('#navLinks .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById('navLinks');
      if (navLinks.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navLinks).hide();
      }
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }
});
