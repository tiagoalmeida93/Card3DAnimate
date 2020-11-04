const card = document.querySelector('.card');
const container = document.querySelector('.container');
const item = document.querySelector('.item');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In
container.addEventListener("mouseenter", e => {
  card.style.transition = 'none';
 
  //item.style.transform = "translateZ(200px) rotateZ(0deg)";
  item.classList.toggle('is-flipped');

  title.style.transform = "translateZ(40px)";
  //sneaker.style.transform = "translateZ(200px) rotateZ(-0deg)";
  description.style.transform = "translateZ(30px)";
  sizes.style.transform = "translateZ(25px)";
  purchase.style.transform = "translateZ(20px)";
})

//Animate Out
container.addEventListener("mouseleave", e => {

  //item.style.transform = "translateZ(0px) rotateZ(0deg)";
  item.classList.toggle('is-flipped');

  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  //sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
})