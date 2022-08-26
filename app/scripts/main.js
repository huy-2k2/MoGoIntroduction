    // Slick slider
    // $(document).ready(function () {
    //   $(".quote-list").slick({
    //     prevArrow:
    //       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    //     nextArrow:
    //       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    //     responsive: [
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           arrows: false,
    //         },
    //       },
    //     ],
    //   });
    // });

const headerToggle = document.querySelector('.header-toggle')
const headerMenu = document.querySelector('.header-menu')
const activeClass = 'is-active'

const wedos = document.querySelectorAll('.wedo-item')
const wedoHeaders = document.querySelectorAll('.wedo-item-header')

headerToggle.onclick = function() {
    headerToggle.classList.add(activeClass)
}

window.onclick = function(e) {
    if(!headerMenu.contains(e.target) && !headerToggle.contains(e.target)) {
        headerToggle.classList.remove(activeClass)
    }
}

for(let i = 0; i < wedoHeaders.length; i++) {
    wedoHeaders[i].onclick = function() {
        for(let j = 0; j < wedoHeaders.length; j++) {
            wedos[j].classList.remove('is-active')
        }
        wedos[i].classList.add(('is-active'))
    }
}

//slick slider
$(document).ready(function() {
    $('.quote-container ').slick({
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
          ]
    })
})