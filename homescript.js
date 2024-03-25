document.addEventListener('DOMContentLoaded', function () {

  const toggleBtn = document.querySelector('.buttonbars');
  const toggleBtnIcon = document.querySelector('.buttonbars i');
  const ddown = document.querySelector('.menu');
  const navCtr = document.querySelector('.nav-container');
  const heading = document.querySelector('.heading');
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;

  toggleBtn.onclick = function () {

    // add style to ddown, display should be block
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

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY >= 250) {
      navCtr.style.justifyContent = "space-between";
      heading.style.display = "flex";
    } else {
      navCtr.style.justifyContent = "flex-end";
      heading.style.display = "none";
    }
  });




});


var countDownDate = new Date("Apr 17, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = "block";
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
