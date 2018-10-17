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
    
    /* var padre = elemento.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre); */

    var nodoEliminar = docuemnt.getElementById(elemento.id);
    var emepleado = nodoEliminar.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeC

}