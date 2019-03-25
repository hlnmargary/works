
AOS.init();
console.log('link');

var all = document.querySelector('.all');
var darkButton = document.querySelector('.darkButton');


darkButton.addEventListener('click', function () {
  if (all.classList.contains('lightmode')) {
    all.classList.remove('lightmode');
    all.classList.add('darkmode');
    darkButton.innerHTML = 'Lightmode';
  } else {
    all.classList.remove('darkmode');
    all.classList.add('lightmode');
    darkButton.innerHTML = 'Darkmode';
  }
});

