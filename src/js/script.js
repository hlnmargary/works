
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
  document.querySelector(".face__scroll").style.opacity = 0;
}, 0);
setTimeout(() => {
  document.querySelector(".face__scroll").style.opacity = 1;
}, 4500);
setTimeout(() => {
  document.querySelector(".all").style.overflow = "initial";
}, 4500);

var imgArray = document.querySelectorAll('.project__img');
var projectArray = document.querySelectorAll('.projects__list li');
var bgcontainer = document.querySelector('.projects__background');

for (let i = 0; i < projectArray.length; i++) {
  projectArray[i].addEventListener('mouseleave', function () {
    console.log('test');

    for (let j = 0; j < imgArray.length; j++) {
      imgArray[j].classList.add('unvisible');
    }
  });
  projectArray[i].addEventListener('mouseover', function () {
    for (let j = 0; j < imgArray.length; j++) {
      if (projectArray[i].dataset.name === imgArray[j].dataset.project) {
        imgArray[j].classList.remove('unvisible');
      }
    }
  });
};

// for (let i = 0; i < projectArray.length; i++) {
//   projectArray[i].addEventListener('click', function () {
//     console.log('clickok');

//     for (let j = 0; j < imgArray.length; j++) {
//       imgArray[j].classList.add('onclick');
//     }
//   });

//   projectArray[i].addEventListener('click', function () {
//     console.log('clickok');
//     for (let j = 0; j < imgArray.length; j++) {
//       if (projectArray[i].dataset.name === imgArray[j].dataset.project) {
//         imgArray[j].clarssList.remove('onclick');

//       }
//     }
//   });
// };