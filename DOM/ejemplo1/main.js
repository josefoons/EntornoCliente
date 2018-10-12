function crearNodo() {
    var nodoPadre = document.getElementById("mono");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Saludos invocador");
    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);
}

