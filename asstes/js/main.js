var slides=document.querySelectorAll('.tiile-animation p');
var slideIndex=0;
slides[slideIndex].classList.add('visible');

setInterval(function(){
    slides[slideIndex].classList.remove('visible');
    slides[slideIndex].classList.add('hedden');
    slideIndex=(slideIndex + 1)% slides.length;
    slides[slideIndex].classList.remove('hedden');
    slides[slideIndex].classList.remove('visible');
    
},2000);

let mobilenav=document.querySelector('.mobile-menu');
document.querySelector('.OC-btn').oneclick = () => {
    mobilenav.classList.add(active);
}
document.querySelector('.closebtn').oneclick = () => {
    mobilenav.classList.remove('active');
}

VanillaTilt.init(document.querySelectorAll(".box"),{
    max:15,
    speed:200
});
