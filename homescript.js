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

var currentVideo = null;

function showControls(element) {
  if (currentVideo !== null && currentVideo !== element) {
    currentVideo.querySelector('video').pause();
  }
  currentVideo = element;
  element.querySelector('video').setAttribute('controls', 'true');
}

function hideControls(element) {
  if (currentVideo === element) {
    currentVideo.querySelector('video').removeAttribute('controls');
  }
}
