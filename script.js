const btnSizeUp = document.querySelector(".sizeUp");
const btnSizeDown = document.querySelector(".sizeDown");
const btnColor = document.querySelector(".color");
var text = document.querySelector(".text");
var p = text.querySelector('p')

function changeFontSize(char, limit) {
    var sizeFont = window.getComputedStyle(document.querySelector("p")).fontSize;
    var matches = sizeFont.match(/\d+/g);
    var parseIntMatche = parseInt(matches[0])

    if (char == '+' & parseIntMatche < limit){
        var newValue = parseIntMatche+5;
    } else if (char =='-' & parseIntMatche > limit) {
        var newValue = parseIntMatche-5;
    }
    p.style.fontSize = newValue+'px';
    }

function sizeUp() {
    changeFontSize('+', 56)
    }

function sizeDown() {
    changeFontSize('-', 16)
    }
    
function changeColor() {
    p.style.color = randomColors()
    function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

btnSizeUp.addEventListener('click', sizeUp);
btnSizeDown.addEventListener('click', sizeDown);
btnColor.addEventListener('click', changeColor)