// Cache UI elements
const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

// Handlers
function openMenu() {
  if (!body.classList.contains('is-open')) body.classList.add('is-open');
}

function closeMenu() {
  if (body.classList.contains('is-open')) body.classList.remove('is-open');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  menuBtn.addEventListener('click', (e) => {
    openMenu();
  });

  closeBtn.addEventListener('click', (e) => {
    closeMenu();
  });
});
