window.addEventListener('load',()=>{

console.log('Web Design Project Loaded Successfully');

});

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity='1';
card.style.transform='translateY(0px)';

}

});

});

cards.forEach(card=>{

card.style.opacity='0';
card.style.transform='translateY(50px)';
card.style.transition='.7s';

});

const nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{

if(window.scrollY>50){

nav.style.background='rgba(0,0,0,.9)';

}else{

nav.style.background='rgba(0,0,0,.5)';

}

});