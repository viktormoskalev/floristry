let navbarToggle = document.querySelector(".navbar-toggle");
let logo = document.querySelector(".logo");

let navbarNav = document.querySelector(".navbar-nav");
navbarToggle.onclick = function () {
  if (navbarToggle.className == "navbar-toggle") {
    navbarToggle.className = "navbar-toggle navbar-toggle-cross";
    navbarNav.style.transform = "translateY(0)";
    navbarNav.style.opacity = "1";
    
    logo.style.transform = "translateX(-50%)";
    logo.style.marginLeft = "50%";
    document.querySelector(".navbar-top").style.position="fixed";
  } else {
    navbarToggle.className = "navbar-toggle";
      navbarNav.style.transform = "translateY(-200%)";
    navbarNav.style.opacity = "0";
    logo.style.transform = "translateX(0)";
    logo.style.marginLeft = "0";
    document.querySelector(".navbar-top").style.position="absolute";
  }

}

//height without mobile tools
let vh = window.innerHeight;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
//height without mobile tools


//Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 30,
      loop: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
      loop: false,
    },
 
  1600: {
    virtualTranslate: true,
    slidesPerView: 4,
    spaceBetween: 60,
    loop: false,
  },
     },
  
});

//for second page
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 2.5,
  loop: true,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});


var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
//Swiper


//scroll

const anchors = document.querySelectorAll('a[href*="#"]');
// console.log("hello");
for (i=0 ; i < anchors.length; i++){
  console.log(anchors[i]);
//  console.log("hello");
anchor=anchors[i];
   
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 console.log(this);
    const blockID = this.getAttribute('href').substr(1);
console.log(this.getAttribute('href'));
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//scroll







// pop-up
$(document).ready(function () {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});
// pop-up

if (window.matchMedia("(min-width: 767px)").matches) {
new WOW().init();
}


