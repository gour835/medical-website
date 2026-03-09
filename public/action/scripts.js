// version 1.0
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    once: true,
    offset: 50,
    duration: 800,
  });
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden')
        ? 'false' : 'true');
    });
  }
});
