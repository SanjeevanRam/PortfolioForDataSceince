/***************** toggel Icon navbar ***********************/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    // menuIcon.classList.toggle('fa-xmark');
    // navbar.classList.toggle('active');
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        navbar.style.display="block ";
    } else {
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
        navbar.style.display='none';
    }
    // navbar.style.display =(navbar.style.display === 'none') ? 'block' :'none';
    // menuIcon.classList.toggle('fa-xmark');
}


/***************** Scroll section active link ***********************/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /***************** sticky navbar ***********************/
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);


    /***************** remove toggel icon and navbar ***********************/ 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active') ;
}


/Typed js*/

const typed =
new Typed(".multiple-text",{
    strings: ["Data Science","Django","Big Data","Data Mining And Modeling","Machine Learning" ,"Data Mapping","Python Library"],
    typeSpeed : 70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});
