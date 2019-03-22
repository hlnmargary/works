
AOS.init();
console.log('link');

var all = document.querySelector('.all');
var darkButton = document.querySelector('.darkButton');


darkButton.addEventListener('click', function () {
  all.classList.toggle('darkmode');
});
