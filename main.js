const menuIcon = document.getElementById('open-menu');
const closeIcon = document.getElementById('close-menu');
const navUl = document.querySelector('nav ul');

function openNav() {
  navUl.classList.add('active');
  updateIcons();
}

function closeNav() {
  navUl.classList.remove('active');
  updateIcons();
}

function updateIcons() {
  if (window.innerWidth >= 768) {
    // Desktop: no icons
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'none';
    navUl.classList.remove('active'); // Ensure sidebar is closed
  } else {
    if (navUl.classList.contains('active')) {
      // Mobile & menu open
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      // Mobile & menu closed
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }
}

// On initial load
window.addEventListener('DOMContentLoaded', updateIcons);

// On resize
window.addEventListener('resize', updateIcons);
