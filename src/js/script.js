

AOS.init();

var svg = document.getElementById("morph");
var s = Snap(svg);

var simpleCup = Snap.select('#jacket');
var fancyCup = Snap.select('#sneakers');

var simpleCupPoints = simpleCup.node.getAttribute('g');
var fancyCupPoints = fancyCup.node.getAttribute('g');


var toFancy = function () {
  simpleCup.animate({ g: fancyCupPoints }, 1000, mina.backout, toSimple);
}

var toSimple = function () {
  simpleCup.animate({ g: simpleCupPoints }, 1000, mina.backout, toFancy);
}


toSimple();