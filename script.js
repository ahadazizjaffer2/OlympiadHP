document.addEventListener('DOMContentLoaded', function () {

    const toggleBtn = document.querySelector('.buttonbars');
    const toggleBtnIcon = document.querySelector('.buttonbars i');
    const ddown = document.querySelector('.menu');
    const navCtr = document.querySelector('.nav-container');
    const heading = document.querySelector('.heading');
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
  
    toggleBtn.onclick = function () {
  
    //   add style to ddown, display should be block
      if (ddown.style.display === "none") {
        ddown.style.display = "flex";
        toggleBtnIcon.className = 'fa-solid fa-xmark';
      } else {
        ddown.style.display = "none";
        toggleBtnIcon.className = 'fa-solid fa-bars';
      }
  
      window.addEventListener('resize', function () {
        const screenWidth = window.innerWidth;
    
        if (screenWidth < 786) {
          toggleBtnIcon.className = 'fa-solid fa-bars';
          ddown.style.display = "none"
        } else {
          ddown.style.display = "flex"
        }
  
      });
  
    }
  
  
  
});


