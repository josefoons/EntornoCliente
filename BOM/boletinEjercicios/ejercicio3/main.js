window.addEventListener("load", cargar, false);
var estilos;
function cargar() {

    window.addEventListener('keydown', moveSelection);
    /*     estilos = document.getStyleSheet("lamierda");
        estilos.class */
}

/* function getStyleSheet(tituloUnico) {
    for(var i=0; i<document.styleSheets.length; i++) {
      var hojaEstilos = document.styleSheets[i];
      if(hojaEstilos.title == tituloUnico) {
        return hojaEstilos;
      }
    }
  } */

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
};

function leftArrowPressed() {
    var element = document.getElementById("rojo");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
    var element = document.getElementById("rojo");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}

function upArrowPressed() {
    var element = document.getElementById("rojo");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
    var element = document.getElementById("rojo");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}