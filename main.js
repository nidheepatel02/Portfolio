/*----------------------typed-------------------*/

var typed = new Typed(".text", {
    strings: ["Just another Software Developer and Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*-----navbar color change----------- */

const navlink=document.querySelectorAll('.nav-item');
navlink.forEach(navlink =>{
    navlink.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        navlink.classList.add( 'active' );

    });
});

/*-----------Social  Media------------*/
document.getElementById('linkedin').addEventListener('click', function () {
    const url = 'https://www.linkedin.com/in/nidhee-patel-497503245';
    window.open(url, '_blank');
});

document.getElementById('git').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02';
    window.open(url, '_blank');
});

document.getElementById('mail').addEventListener('click', function () {
    const url = 'mailto:nidheep2010@gmail.com';
    window.open(url, '_blank');
});

/*--------------------------Project code link-----------------------*/
document.getElementById('notes_app').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/Notes_App';
    window.open(url, '_blank');
});

document.getElementById('onlinenews').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/Online_News_React';
    window.open(url, '_blank');
});

document.getElementById('qrcodegenerator').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/QR_Code_Generator';
    window.open(url, '_blank');
});

document.getElementById('food_ordering').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/Food_Order_Web_Design';
    window.open(url, '_blank');
});

document.getElementById('weather_app').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/Weather_App';
    window.open(url, '_blank');
});

/*------toggle navbar--------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}