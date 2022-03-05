// @ts-nocheck

/****  JQUERY ****/
$(document).ready(function () {
  /*--------------- NAVBAR SHRINK -------------------*/
  // $(window).on('scroll', function () {
  //   if ($(this).scrollTop() > 90) {
  //     $('.navbar').addClass('navbar-shrink')
  //   } else {
  //     $('.navbar').removeClass('navbar-shrink')
  //   }
  // })
  /*----------------- VIDEO POPUP -------------------*/
  //   const videoSrc = $('#player-1').attr('src')
  //   $('.video-play-btn, .video-popup').on('click', function () {
  //     if ($('.video-popup').hasClass('open')) {
  //       $('.video-popup').removeClass('open')
  //       $('#player-1').attr('src', '')
  //     } else {
  //       $('.video-popup').addClass('open')
  //       if ($('#player-1').attr('src') == '') {
  //         $('#player-1').attr('src', videoSrc)
  //       }
  //     }
  //   })

  /*----------------- FEATURES CAROUSEL -------------------*/
  // Code JQurey pris sur own carousel: https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html
  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  /*----------------- SCREENSHOTS CAROUSEL -------------------*/
  $('.screenshots-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  })

  /*----------------- TESTIMONIALS CAROUSEL -------------------*/
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  /*----------------- TEAM CAROUSEL -------------------*/
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  /*----------------- PAGE SCROLLING - SCROLLIT.JS -------------------*/
  // http://www.bytemuse.com/scrollIt.js/
  $.scrollIt({
    topOffset: -50, // offset (in px) for fixed top navigation
  })

  /*--------------- NAVBAR COLLAPSE -------------------*/
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })

  // $(window).on('load', function () {
  //   $('.preloader').fadeOut('slow')
  // })
})

/**** JAVASCRIPT ****/

/*--------------- PRELOADER -------------------*/
const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
  preloader.classList.add('fade-out')

  setTimeout(() => {
    preloader.style.display = 'none'
  }, 600)
})

/*-------------------- TOGGLE THEME DARK & LIGHT MODE -------------------*/
const body = document.body
const toggleThemeIcon = document.querySelector('.toggle-theme i')

function toggleTheme() {
  if (localStorage.getItem('elviredev-theme') !== null) {
    if (localStorage.getItem('elviredev-theme') === 'dark') {
      // $('body').addClass('dark')
      body.classList.add('dark')
    } else {
      // $('body').removeClass('dark')
      body.classList.remove('dark')
    }
  }
  updateIcon()
}

toggleTheme()

$('.toggle-theme').on('click', function () {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    localStorage.setItem('elviredev-theme', 'dark')
  } else {
    localStorage.setItem('elviredev-theme', 'light')
  }
  updateIcon()
})

function updateIcon() {
  if (body.classList.contains('dark')) {
    toggleThemeIcon.classList.remove('fa-moon')
    toggleThemeIcon.classList.add('fa-sun')
  } else {
    toggleThemeIcon.classList.remove('fa-sun')
    toggleThemeIcon.classList.add('fa-moon')
  }
}

/*--------------- NAVBAR SHRINK -------------------*/
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
  if (this.scrollY > 90) {
    navbar.classList.add('navbar-shrink')
  } else {
    navbar.classList.remove('navbar-shrink')
  }
})

/*----------------- VIDEO POPUP -------------------*/
const videoSrc = document.querySelector('#player-1').getAttribute('src')
const videoPlayBtn = document.querySelector('.video-play-btn')
const videoPopup = document.querySelector('.video-popup')

videoPlayBtn.addEventListener('click', toggleVideo)
videoPopup.addEventListener('click', toggleVideo)

function toggleVideo() {
  if (videoPopup.classList.contains('open')) {
    videoPopup.classList.remove('open')
    document.querySelector('#player-1').getAttribute('src', '')
  } else {
    videoPopup.classList.add('open')
    if (document.querySelector('#player-1').getAttribute('src') === '') {
      document.querySelector('#player-1').getAttribute('src', videoSrc)
    }
  }
}
