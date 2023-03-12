

// --------------- open and close menu start --------------- //

// get element
const Menu = document.getElementById('menu');
const shadowMenu = document.getElementById('shadow-menu');
const btnOpenMenu = document.getElementById('btn-open-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');

// open menu
btnOpenMenu.addEventListener('click', function(){
    Menu.style.transform = 'translateX(0%)';
    shadowMenu.style.display = 'block';
})

// close menu by clicking on button close
btnCloseMenu.addEventListener('click', function(){
    Menu.style.transform = 'translateX(100%)';
    shadowMenu.style.display = 'none';
})

// close menu by clicking on screen
shadowMenu.addEventListener('click', function(){
    Menu.style.transform = 'translateX(100%)';
    shadowMenu.style.display = 'none';
})

// --------------- open and close menu end --------------- //




// document.addEventListener('contextmenu', event => event.preventDefault());










$('#example-work-slider').owlCarousel({
    loop:false,
    margin:10,
    rtl:true,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items: 1
        },
        640:{
            items: 2
        },
        1024:{
            items: 3
        },
        1500:{
            items: 4
        }
    }
});

$(document).ready(function(){
    $("#btn-next-slide-work").click(function(){
        $("#example-work-slider").trigger('next.owl.carousel');
    });
    $("#btn-prev-slide-work").click(function(){
        $("#example-work-slider").trigger('prev.owl.carousel');
    });
});


