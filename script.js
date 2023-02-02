// Count NUmbers of course years etc.
window.addEventListener("scroll", function () {
  let element = document.querySelector(".about-timetable");
  let rect = element.getBoundingClientRect();
  let isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  if (isVisible) {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        document.getElementById("years").innerHTML = `${i}+`;
      }, i * 10);
    }
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        document.getElementById("courses").innerHTML = `${i}+`;
      }, i * 1);
    }
    for (let i = 1; i <= 5000; i++) {
      setTimeout(() => {
        document.getElementById("students").innerHTML = `${i}+`;
      }, i * 0.1);
    }
    for (let i = 1; i <= 500; i++) {
      setTimeout(() => {
        document.getElementById("placements").innerHTML = `${i}+`;
      }, i * 0.8);
    }
  }
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Testimonial Swiper

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll to Top

// function topFunction() {
//   window.scroll({ top: 0, behavior: "smooth" });
// }

// Get the button:
let myBtn = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({ top: 0, behavior: "smooth" });
}
