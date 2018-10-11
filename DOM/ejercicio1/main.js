function colocarTexto1() {
    var nodoPadre = document.getElementById("uno");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Texto 1");
    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);    
}

function colocarTexto2() {
    var nodoPadre = document.getElementById("dos");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Texto 2");
    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);    
}

function colocarTexto3() {
    var nodoPadre = document.getElementById("tres");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Texto 3");
    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);    
}

function colocarTexto4() {
    var nodoPadre = document.getElementById("cuatro");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Texto 4");
    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);    
}

function colocarTexto() {
    colocarTexto1();
    colocarTexto2();
    colocarTexto3();
    colocarTexto4();
}