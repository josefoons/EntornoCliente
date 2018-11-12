window.addEventListener("load", cargar, false);
var turno = 0; // 0 = Player . 1 = CPU
function cargar() {
    document.getElementById("celda1").addEventListener("click", ponerFicha);
    document.getElementById("celda2").addEventListener("click", ponerFicha);
    document.getElementById("celda3").addEventListener("click", ponerFicha);
    document.getElementById("celda4").addEventListener("click", ponerFicha);
    document.getElementById("celda5").addEventListener("click", ponerFicha);
    document.getElementById("celda6").addEventListener("click", ponerFicha);
    document.getElementById("celda7").addEventListener("click", ponerFicha);
    document.getElementById("celda8").addEventListener("click", ponerFicha);
    document.getElementById("celda9").addEventListener("click", ponerFicha);
}


function ponerFicha() {

    if (turno == 0) {
        if (comprobarContenidoCelda(this)) {
            this.innerHTML = "X";
            turno = 1;
        }
    } else {
        if (comprobarContenidoCelda(this)) {
            this.innerHTML = "O";
            turno = 0;
        }
    }
    turno();
}

function comprobarContenidoCelda(elemento) {

    if (elemento.innerHTML == "") {
        return true;
    } else {
        return false;
    }

}

function comprobarVerticar(elemento) {
    
    var contador = 0;

    if()

}