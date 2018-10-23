document.addEventListener("DOMContentLoaded", cargar, false);
function cargar() {
    document.getElementById("lapiz").addEventListener("click", iniciaInputs);
    document.getElementById("eliminar").addEventListener("click", eliminarInputs);
}

function iniciaInputs() {
    var array = this.parentNode.getElementsByTagName("input");
    for (let index = 0; index < array.length; index++) {
        
        array[index].disabled = false;
        
    }
}

function eliminarInputs() {
    
    var padre = this.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre);

}