var elemento;
document.addEventListener("DOMContentLoaded", cargar, false);
function cargar() {
    document.getElementById('boton1').addEventListener("click", boton1, false);
    document.getElementById('boton2').addEventListener("click", boton2, false);
    elemento = document.getElementById('boton1');
}



function boton1() {
    alert("Esta es mi ID: " + elemento.id);
}

function boton2() {
    let event = new Event("click");
    elemento.dispatchEvent(event);
}