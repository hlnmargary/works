
import Rellax from "rellax";

console.log('js-linked');

var rellax = new Rellax('.rellax');


// setTimeout(() => {
//   document.querySelector(".face").style.opacity = 1;
// }, 100);
// setTimeout(() => {
//   document.querySelector(".face").style.opacity = 0;
// }, 7000);

setTimeout(() => {
  document.querySelector(".face__text").style.opacity = 0;
}, 0);
setTimeout(() => {
  document.querySelector(".face__text").style.opacity = 1;
}, 2000);
setTimeout(() => {
  document.querySelector(".face__scroll").style.opacity = 1;
}, 4500);
setTimeout(() => {
  document.querySelector(".all").style.opacity = 1;
}, 4500);





var AS = document.querySelector('.AS');
var SoC = document.querySelector('.SoC');
var bg = document.querySelector('.project__img');

AS.addEventListener('mouseover', function () {
  bg.src = "assets/img/AlsoS.svg";
});

SoC.addEventListener('mouseover', function () {
  bg.src = "assets/img/LOGO.jpg";
});