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
document.getElementById('onlinenews').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/nidheepatel02';
    window.open(url, '_blank');
});

document.getElementById('ecommerce').addEventListener('click', function () {
    const url = 'https://github.com/nidheepatel02/ECommerce';
    window.open(url, '_blank');
});

/*------toggle navbar--------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}

/*-----------------scroll section active link-----------*/
let section = document.querySelectorAll('#section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*-----------sticky navbar-----------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*---------------remove toggle icon and navbar----------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};