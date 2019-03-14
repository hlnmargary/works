
// import Rellax from "rellax";

// console.log('js-linked');

// var rellax = new Rellax('.rellax');


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


// variables

var imgArray = document.querySelectorAll('.project__img');
var projectArray = document.querySelectorAll('.projects__list li');
var bgcontainer = document.querySelector('.projects__background');
var projectList = document.querySelector('.projects__list');
var projectContainer = document.querySelector('.projects__container');
var presContainer = document.getElementById('presentations');


// Hover on projectList -> Background image change

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

// On click -> projectList transition on left

var bgContainer = document.getElementById("bg");

for (let i = 0; i < projectArray.length; i++) {
  projectArray[i].addEventListener('click', function () {
    console.log('test');
    if (document.getElementById('sideList').classList.contains('notclicked')) {
      document.getElementById('sideList').classList.remove('notclicked');
      document.getElementById('sideList').classList.add('clicked');
      bgContainer.style.display = 'none';
      projectArray.selectorText.replace(':hover', ':active');

      // bgContainer.parentNode.removeChild(bgContainer);
    } else {
      document.getElementById('sideList').classList.remove('clicked');
      document.getElementById('sideList').classList.add('notclicked');
      bgContainer.style.display = 'block';
    }
  });
};




//////// PARTICLES /////////

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 792, "density":
      {
        "enable": true, "value_area": 10733.646887996271
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0, "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "img/github.svg",
        "width": 100, "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    }, "line_linked": {
      "enable": true,
      "distance": 160.3412060865523,
      "color": "#000000",
      "opacity": 0.2244776885211732,
      "width": 0.8017060304327615
    },
    "move": {
      "enable": true,
      "speed": 4.810236182596568,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on":
      "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked":
        {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 159.84015984015983,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update; stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement); 