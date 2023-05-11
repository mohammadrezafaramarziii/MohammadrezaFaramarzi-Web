

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











// --------------- open and close menu start --------------- //

// get element
const Menu = document.getElementById('menu');
const btnOpenMenu = document.getElementById('btn-open-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const shadowMenu = document.getElementById('shadow-menu');

function openMenu() {
    shadowMenu.style.display = 'block';
    Menu.style.display = 'block';
}

function closeMenu() {
    shadowMenu.style.display = 'none';
    Menu.style.display = 'none';
}

// open menu
btnOpenMenu.addEventListener('click', openMenu)

// close menu by clicking on button close
btnCloseMenu.addEventListener('click', closeMenu)

// close menu by clicking on screen
shadowMenu.addEventListener('click', closeMenu)

// --------------- open and close menu end --------------- //










// --------------- open and close profile box start --------------- //

// get element
const profileBox = document.getElementById('profile-box');
const btnOpenProfileDesk = document.getElementById('btn-open-profile-desk');
const btnOpenProfileMob = document.getElementById('btn-open-profile-mob');
const btnCloseProfile = document.getElementById('btn-close-profile');

function openProfileBox() {
    profileBox.style.display = 'flex';
}

function closeProfileBox() {
    profileBox.style.display = 'none';
}

// open profile box desktop
btnOpenProfileDesk.addEventListener('click', openProfileBox)

// open profile box mobile
btnOpenProfileMob.addEventListener('click', openProfileBox)

// close profile box by clicking on button close
btnCloseProfile.addEventListener('click', closeProfileBox)

// --------------- open and close profile box end --------------- //










// --------------- dark and light mode start --------------- //

// get elements
const btnDarkModeDesk = document.getElementById('btn-dark-mode-desk');
const btnDarkModeMob = document.getElementById('btn-dark-mode-mob');
const btnDarkModeMobIcon = document.getElementById('icon-dark-mode-mob');
const btnDarkModeMobText = document.getElementById('text-dark-mode-mob');
const logo = document.getElementById('logo');
const logoFooter = document.getElementById('logo-footer');
const html = document.getElementById('html');
const body = document.body;
let stateDark = "light";


// dark and light mode desktop
btnDarkModeDesk.addEventListener('click', function(){
    html.classList.toggle("dark");
    if(stateDark === "light"){
        stateDark = "dark";
        btnDarkModeDesk.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"/></svg>';
        logo.setAttribute("src","./assets/img/logo-dark.svg");
        logoFooter.setAttribute("src","./assets/img/logo-dark.svg");
        btnDarkModeMobText.innerHTML = "تم تاریک";
        btnDarkModeMobIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"/></svg>';
        body.classList.remove('light-scroll');
        body.classList.add('dark-scroll');
    }
    else {
        stateDark = "light";
        btnDarkModeDesk.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06Zm-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></g></svg>';
        logo.setAttribute("src","./assets/img/logo-light.svg");
        logoFooter.setAttribute("src","./assets/img/logo-light.svg");
        btnDarkModeMobText.innerHTML = "تم روشن";
        btnDarkModeMobIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06Zm-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></g></svg>'
        body.classList.add('light-scroll');
        body.classList.remove('dark-scroll');
    }
})


// dark and light mode mobile
btnDarkModeMob.addEventListener('click', function(){
    html.classList.toggle("dark");
    if(stateDark === "light"){
        stateDark = "dark";
        btnDarkModeDesk.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"/></svg>';
        btnDarkModeMobText.innerHTML = "تم تاریک";
        btnDarkModeMobIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"/></svg>';
        logo.setAttribute("src","./assets/img/logo-dark.svg");
        logoFooter.setAttribute("src","./assets/img/logo-dark.svg");
        body.classList.remove('light-scroll');
        body.classList.add('dark-scroll');
    }
    else {
        stateDark = "light";
        btnDarkModeDesk.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06Zm-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></g></svg>';
        btnDarkModeMobText.innerHTML = "تم روشن";
        btnDarkModeMobIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06Zm-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></g></svg>'
        logo.setAttribute("src","./assets/img/logo-light.svg");
        logoFooter.setAttribute("src","./assets/img/logo-light.svg");
        body.classList.add('light-scroll');
        body.classList.remove('dark-scroll');
    }
})

// --------------- dark and light mode end --------------- //










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










// --------------- download resume start --------------- //

// elemnt and url pdf
const btnDownloadResume = document.querySelector('.btn-download-resume');
let url = "./assets/MohammadRezaFaramarzi-resume.pdf";

function Download(event) {
  event.preventDefault();
  downloadResume(url);
}

function downloadResume(url) {
  fetch(url, {
    mode : 'no-cors',
  })
    .then(response => response.blob())
    .then(blob => {
    let blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = url.replace(/^.*[\\\/]/, '');
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
}

// --------------- download resume start --------------- //