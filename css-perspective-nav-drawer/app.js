document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const menuBtn = document.querySelector('#menu-btn');

  menuBtn.addEventListener('click', (e) => {
    if (body.classList.contains('is-open')) {
      body.classList.remove('is-open');
    } else {
      body.classList.add('is-open');
    }
  });
});
