function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function componentToHex(c) {
var hex = c.toString(16);
return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var r = randint(0,255);
var g = randint(0,255);
var b = randint(0,255);

document.body.style.backgroundColor = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";

document.querySelector("#tehcoloRGB").textContent = r.toString() + ", " + g.toString() + ", " + b.toString();

document.querySelector("#tehcoloHEX").textContent = rgbToHex(r, g, b);