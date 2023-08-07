const toggleButton = document.getElementById('toggle-menu');
const menuLinks = document.getElementById('menu-links');

toggleButton.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (on mobile)
menuLinks.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    menuLinks.classList.remove('active');
  }
});

// Close the menu when the window is resized (on mobile)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuLinks.classList.remove('active');
  }
});
