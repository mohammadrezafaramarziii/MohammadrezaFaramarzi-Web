// --------------- loader start --------------- //

const loaderBox = document.getElementById('loader-box');
const allElement = document.getElementById('all-element');

window.onload = () => {
    loaderBox.classList.add("hidden");
    allElement.classList.remove("hidden");    
}

// --------------- loader end --------------- //






// --------------- change menu in scroll start --------------- //

let classList = [
    'fixed-nav', 
    'bg-white', 
    'dark:bg-slate-900', 
    'border-b', 
    'border-slate-200', 
    'dark:border-slate-200/10'
]

var $a= $.noConflict(true);
    $a(window).scroll(function(){
        if ($a(window).scrollTop() >= 300) {
            for(classes in classList){
                $a('#nav').addClass(classList[classes]);
            }
        }
        else {
            for(classes in classList){
                $a('#nav').removeClass(classList[classes]);
            }
        }
    });

// --------------- change menu in scroll end --------------- //










// --------------- change url start --------------- //

// menu
var itemsMenuDesk = document.querySelectorAll('#items-menu-desk a');
var itemsMenuMob = document.querySelectorAll('#items-menu-mob a');

for (var i = 0; i < itemsMenuDesk.length; i++) {
    itemsMenuDesk[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.getElementById(targetId.slice(1));
    targetElement.scrollIntoView({behavior: 'smooth'});
  });
}

for (var i = 0; i < itemsMenuMob.length; i++) {
    itemsMenuMob[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.getElementById(targetId.slice(1));
    targetElement.scrollIntoView({behavior: 'smooth'});
  });
}


// profile box buttons
const profileBtn = document.querySelectorAll('#profile-btns a');

for (var i = 0; i < profileBtn.length; i++) {
    profileBtn[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.getElementById(targetId.slice(1));
    targetElement.scrollIntoView({behavior: 'smooth'});
  });
}


// button call about me
const btnGoAboutMe = document.getElementById('btn-about-me');
const aboutMe = document.getElementById('aboutme');

btnGoAboutMe.addEventListener('click', function(event){
    event.preventDefault();
    aboutMe.scrollIntoView({behavior: 'smooth'});
})


// logo in top
const logoLink = document.getElementById('logoLink');

logoLink.addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollIntoView({behavior: 'smooth'});
})

// --------------- change url end --------------- //





// --------------- auto write start --------------- //

// get elemnt
const helloTextBox = document.getElementById('hello-text');

// hello details
let helloText = "سلام :)"
let indexHelloText = 0;
let timeHelloText;

// welcome details
let welcomeText = "خوش آمدید"
let indexWelcomeText = 0;
let timeWelcomeText;


// auto write hello
function autoWriteHello() {
    helloTextBox.innerText = helloText.slice(0, indexHelloText);
    indexHelloText++;

    if(indexHelloText === helloText.length + 1){
        indexHelloText = 0;
        setTimeout(function(){
            helloTextBox.innerText = "";
        }, 3000)
        clearInterval(timeHelloText);
    }
}

// auto write welcome
function autoWriteWelcome() {
    helloTextBox.innerText = welcomeText.slice(0, indexWelcomeText);
    indexWelcomeText++;

    if(indexWelcomeText === welcomeText.length + 1) {
        indexWelcomeText = 0;
        clearInterval(timeWelcomeText);
    }
}


// time hello
timeHelloText = setInterval(autoWriteHello, 200);


// time welcome
setTimeout(function(){
    timeWelcomeText = setInterval(autoWriteWelcome, 200);
}, 3000);

// --------------- auto write end --------------- //
