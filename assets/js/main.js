

// --------------- change url start --------------- //

// menu
var itemsMenu = document.querySelectorAll('#items-menu a');

for (var i = 0; i < itemsMenu.length; i++) {
  itemsMenu[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.getElementById(targetId.slice(1));
    targetElement.scrollIntoView({behavior: 'smooth'});
  });
}


// button call data
const btnGoCallData = document.getElementById('btn-callData');
const callData = document.getElementById('callData');

btnGoCallData.addEventListener('click', function(event){
    event.preventDefault();
    callData.scrollIntoView({behavior: 'smooth'});
})


// name in navbar
const nameNavbar = document.getElementById('nameNavbar');

nameNavbar.addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollIntoView({behavior: 'smooth'});
})


// logo in top
const logoLink = document.getElementById('logoLink');

logoLink.addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollIntoView({behavior: 'smooth'});
})

// --------------- change url end --------------- //





// --------------- disable right click start --------------- //

document.addEventListener('contextmenu', event => event.preventDefault());

// --------------- disable right click end --------------- //





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





// --------------- example work slider start --------------- //

// slider config
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


// next and previus buttons
$(document).ready(function(){
    $("#btn-next-slide-work").click(function(){
        $("#example-work-slider").trigger('next.owl.carousel');
    });
    $("#btn-prev-slide-work").click(function(){
        $("#example-work-slider").trigger('prev.owl.carousel');
    });
});

// --------------- example work slider end --------------- //

