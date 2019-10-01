// Your code goes here

document.querySelectorAll('.img-content').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)' ;
        img.style.transition = 'all 0.3s'; 
    })

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1.0)' ;
        img.style.transition = 'all 0.3s'; 
    })
})

let welcomeBusH = document.querySelector('h2');

const bodyBackground = document.querySelector('body')
bodyBackground.addEventListener('click', () => {
    bodyBackground.style.background = 'tan'; 
})


welcomeBusH.addEventListener('click', () => {
    welcomeBusH.style.color = 'aqua'; 
    event.stopPropagation(); 
    
})

let logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('mouseover', () => {
    logoHeading.textContent = 'Logo Has Changed'; 
 })

 logoHeading.addEventListener('mouseleave', () => {
    logoHeading.textContent = 'Fun Bus'; 
 })


 function zoom(e) {
     e.preventDefault();
     scale+= e.deltaY * -0.01;

     scale = Math.min(Math.max(.125, scale), 3);

     el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.img-content');
el.onwheel = zoom; 

stopAnchors = document.querySelectorAll('a')

stopAnchors.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

const allImgs = document.querySelectorAll('img');

window.addEventListener('resize', () => {
    allImgs[3].src = "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"; 
})

const pTags = document.querySelectorAll('p');

pTags.forEach((p) => {
 p.addEventListener('click', (e) => {
  if(e.target.matches('p')) {
      e.target.remove(); 
      event.stopPropagation();
  }
 })
})

allImgs[3].setAttribute('class', 'pizza-img');

const pizzaImg = document.querySelector('.pizza-img');


TweenMax.to('.pizza-img', 1, {
    rotation: -180,
    x: 800,
    y: 1000,
    ease:  Elastic.easeOut.config( 1, 0.75),
    transition: 'all 5s' 

})