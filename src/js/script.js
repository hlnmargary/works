
AOS.init();
console.log('link');

var all = document.querySelector('.all');
var darkButton = document.querySelector('.darkButton');


darkButton.addEventListener('click', function () {
  console.log('ok');
  all.classList.toggle('darkmode');
  console.log('toggle');
});
