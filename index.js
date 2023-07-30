const $modeButton = document.querySelector('.header__mode-button')
const $mobileButton = document.querySelector('.header__mobile-button')
const $closeButtom = document.querySelector('.header__mobile-close')
const $navLinks = document.querySelectorAll('.header__item-link')
const $burger = document.querySelector('.header__burger')
const $nav = document.querySelector('.header__nav')

$burger.addEventListener('click', () => {
    $burger.classList.toggle('burger--active')
    $burger.classList.toggle('burger__line--active')
    $nav.classList.toggle('nav--visible')
})

$closeButtom?.addEventListener('click', () => {
    $burger.classList.toggle('burger--active')
    $burger.classList.toggle('burger__line--active')
    $nav.classList.toggle('nav--visible')
})

$navLinks.forEach(link => {
    link.addEventListener('click', () => {
        $burger.classList.toggle('burger--active')
        $burger.classList.toggle('burger__line--active')
        $nav.classList.toggle('nav--visible')
    })
})

$modeButton.addEventListener('click', () => {
    $modeButton.classList.toggle('active')
})

$mobileButton.addEventListener('click', () => {
    $mobileButton.classList.toggle('active')
})


$(document).ready(function(){
    $('.reviews__items').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 320,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]        
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let acc = new Accordion('.answer__items', {
        duration: 700,
        elementClass: 'answer__item',
        triggerClass: 'answer__top',
        panelClass: 'answer__bottom',
        showMultiple: false
    })
})

