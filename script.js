document.addEventListener('DOMContentLoaded', function () {

  const toggleBtn = document.querySelector('.buttonbars');
  const toggleBtnIcon = document.querySelector('.buttonbars i');
  const ddown = document.querySelector('.dropdown');
  const navCtr = document.querySelector('.nav-container');
  const heading = document.querySelector('.heading');
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;

  toggleBtn.onclick = function () {
    ddown.classList.toggle('open');
    const isOpen = ddown.classList.contains('open');

    toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
  };

  window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth > 786) {
      ddown.classList.remove('open');
      toggleBtnIcon.className = 'fa-solid fa-bars';
    }

  });
  
});
