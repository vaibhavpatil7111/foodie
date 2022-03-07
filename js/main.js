// Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapase = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapase.classList.remove("show");
  });
});

// counter Design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      stop = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stop);
  }
  counter("count-1", 0, 1287, 3000);
  counter("count-2", 100, 5786, 2500);
  counter("count-3", 0, 1440, 3000);
  counter("count-4", 0, 7110, 3000);
});
