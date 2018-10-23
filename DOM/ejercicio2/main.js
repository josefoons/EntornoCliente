function eliminarSobra(elemento) {
    
    document.getElementById(elemento.id).style.boxShadow = "none";

}

function sombraInterior(elemento) {
    
    document.getElementById(elemento.id).style.boxShadow = "5px 5px 25px #222 inset";

}

function circulo(elemento) {
    
    document.getElementById(elemento.id).style.borderRadius = "50%"; 
    document.getElementById(elemento.id).style.transition = "all 1s ease-in-out";

}

function vuelveSombra(elemento) {

    document.getElementById(elemento.id).style.boxShadow = "5px 5px 5px grey";

}

function eliminarTodo(elemento) {
    
    var padre = elemento.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre);

}

function cuadrado(elemento) {
    
    document.getElementById(elemento.id).style.borderRadius = "0%"; 
    document.getElementById(elemento.id).style.transition = "all 1s ease-in-out";

}