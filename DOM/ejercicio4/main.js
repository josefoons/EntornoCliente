document.addEventListener("DOMContentLoaded", cargar, false);
var lineas = 0; // Cuenta la cantidad de DIVS (lineas de inputs que existen)
var rutaDelete = "delete.png";
var rutaLapiz = "editar.png";

function cargar() {
    document.getElementById("lapiz0").addEventListener("click", iniciaInputs);
    document.getElementById("eliminar0").addEventListener("click", preguntaEliminar);
    document.getElementById("anyadir").addEventListener("click", ponerNuevos);
    document.getElementById("inputD0").addEventListener("input", comprobarInputs);
    document.getElementById("inputN0").addEventListener("input", comprobarInputs);
    document.getElementById("inputA0").addEventListener("input", comprobarInputs);
}

function iniciaInputs() {
    var array = this.parentNode.getElementsByTagName("input");
    for (let index = 0; index < array.length; index++) {

        array[index].disabled = false;

    }
}

function eliminarInputs(element) {

    var padre = element.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre);

}

function preguntaEliminar() {
    
    var pregunta = confirm("¿Estas seguro?");
    if (pregunta) {
        eliminarInputs(this);
    } 

}

function comprobarInputs() {
    
    var inputId = this.id;
    var papa = this.parentNode;
    var inputs = papa.getElementsByTagName("input");
    var idPillada = inputId.substring(6, inputId.length);
    var botonEliminar = document.getElementById("eliminar" + idPillada);

    if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "") {
        botonEliminar.disabled = false;
    }

    //Si alguno esta vacio se vuelve a bloquear.
    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
        botonEliminar.disabled = true;
    }

}


function ponerNuevos() {

    lineas++;
    id = "form" + lineas;
    idDNI = "inputD" + lineas;
    idNombre = "inputN" + lineas;
    idApellidos = "inputA" + lineas;
    idLapiz = "lapiz" + lineas;
    idEliminar = "eliminar" + lineas;

    nodoAbuelo = document.body; // pilla body tt
    
    //Crear div
    div = document.createElement('div');
    div.setAttribute("id", id);
    div.setAttribute("class", "form-inline");
    nodoAbuelo.appendChild(div);

    //PillarDiv
    nodoPadre = document.getElementById(id);

    //Crear Dni
    var dni = document.createElement("label");
    dni.innerText = "DNI";
    nodoPadre.appendChild(dni);

    var dniInput = document.createElement("input");
    dniInput.setAttribute("type", "text");
    dniInput.setAttribute("id", idDNI); 
    dniInput.setAttribute("class", "form-control");
    dniInput.disabled = true;
    dniInput.addEventListener("input", comprobarInputs);
    nodoPadre.appendChild(dniInput);

    //Crear Nombre
    var nombre = document.createElement("label");
    nombre.innerText = "Nombre";
    nodoPadre.appendChild(nombre);

    var nombreInput = document.createElement("input");
    nombreInput.setAttribute("type", "text");
    nombreInput.setAttribute("class", "form-control");
    nombreInput.setAttribute("id", idNombre); 
    nombreInput.addEventListener("input", comprobarInputs);
    nombreInput.disabled = true;
    nodoPadre.appendChild(nombreInput);

    //Crear Apellidos
    var apellidos = document.createElement("label");
    apellidos.innerText = "Apellidos";
    nodoPadre.appendChild(apellidos);

    var apellidosInput = document.createElement("input");
    apellidosInput.setAttribute("type", "text");
    apellidosInput.setAttribute("id", idApellidos); 
    apellidosInput.disabled = true;
    apellidosInput.setAttribute("class", "form-control");
    apellidosInput.addEventListener("input", comprobarInputs);
    nodoPadre.appendChild(apellidosInput);

    // Crear eliminar
    var eliminar = document.createElement("button");
    eliminar.setAttribute("id", idEliminar);
    eliminar.setAttribute("class", "btn btn-danger");
    eliminar.addEventListener("click", preguntaEliminar);

    //Crear imagen dentro boton
    var imagenEliminar = document.createElement("img");
    imagenEliminar.setAttribute("src", rutaDelete);
    eliminar.appendChild(imagenEliminar);
    eliminar.disabled = true;

    nodoPadre.appendChild(eliminar);

    // Crear lapiz
    var lapiz = document.createElement("button");
    lapiz.setAttribute("id", idLapiz);
    lapiz.setAttribute("class", "btn btn-success");
    lapiz.addEventListener("click", iniciaInputs);

    //Crear imagen dentro boton
    var imagenLapiz = document.createElement("img");
    imagenLapiz.setAttribute("src", rutaLapiz);
    lapiz.appendChild(imagenLapiz);

    nodoPadre.appendChild(lapiz);
}