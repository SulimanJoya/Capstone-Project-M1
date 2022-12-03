const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navbar_container');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navContainer.classList.toggle('active');
});

document.querySelectorAll('.nav_links').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navContainer.classList.remove('active');
}));
