let color ='';
let body = document.getElementById('body');

function randomColor(){
    let color = Math.floor(Math.random() * 0xffffff).toString(16)
    body.style.background = '#'+color;
    return color
}

color='#'+randomColor(color);

function copy(){
    navigator.clipboard.writeText(color);
    alert("Copied the hexa: " + color);
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
    e.code == "Space" ||
    e.keyCode == 32
    ) {
    randomColor();
    }
    }