window.addEventListener("load", cargar, false);
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

var turno = 0; // 0 = Player . 1 = CPU
var fin = false;
var casillas = document.getElementsByClassName("celda");

function ponerFicha() {

    if (comprobarContenidoCelda(this)) {
        this.innerHTML = "X";
        eliminarCeldaArray(this);
    }
    moveCPU();

    ganador();
    if (fin) {
        reiniciar();
    }
}

function moveCPU() {
    //alert("moveCPU");
    colocarCPU();

    ganador();
    if(fin) {
        reiniciar();
    }
}

function comprobarContenidoCelda(elemento) {

    if (elemento.innerHTML == "") {
        return true;
    } else {
        return false;
    }

}

function comprobarVertical() {


    for (let index = 0; index < 3; index++) {

        var cel1 = document.getElementById("celda" + (1 + index)).innerHTML;
        var cel2 = document.getElementById("celda" + (4 + index)).innerHTML;
        var cel3 = document.getElementById("celda" + (7 + index)).innerHTML;


        if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
            //CPU
            return "cpu";
        }

        if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
            //PLAYER
            return "player";
        }

    }
}

function comprobarHorizontal() {


    for (let index = 0; index < 3; index++) {

        var cel1 = document.getElementById("celda" + (1 + index)).innerHTML;
        var cel2 = document.getElementById("celda" + (2 + index)).innerHTML;
        var cel3 = document.getElementById("celda" + (3 + index)).innerHTML;


        if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
            //CPU
            return "cpu";
        }

        if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
            //PLAYER
            return "player";
        }

    }
}

function comprobarDiagonalDeToIz() {
    var cel1 = document.getElementById("celda1").innerHTML;
    var cel2 = document.getElementById("celda5").innerHTML;
    var cel3 = document.getElementById("celda9").innerHTML;


    if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
        //CPU
        return "cpu";

    }



    if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
        //PLAYER
        return "player";
    }
}

function comprobarDiagonalIzToDer() {
    var cel1 = document.getElementById("celda7").innerHTML;
    var cel2 = document.getElementById("celda5").innerHTML;
    var cel3 = document.getElementById("celda3").innerHTML;


    if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
        //CPU
        return "cpu";
    }

    if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
        //PLAYER
        return "player";
    }
}

function ganador() {

    if (comprobarVertical() == "player" || comprobarHorizontal() == "player" || comprobarDiagonalIzToDer() == "player" || comprobarDiagonalDeToIz() == "player") {
        fin = true;
        return "Player";
    }
    if (comprobarVertical() == "cpu" || comprobarHorizontal() == "cpu" || comprobarDiagonalIzToDer() == "cpu" || comprobarDiagonalDeToIz() == "cpu") {
        fin = true;
        return "CPU";
    }

}

function reiniciar() {
    if (confirm("¿Reiniciar el juego?")) {
        location.reload();
    }
}

function colocarCPU() {
    var ale = parseInt(Math.random() * (casillas.length - 1) + 1);
    //alert(casillas[ale].id);

    var celda = document.getElementById(casillas[ale].id);
    //alert(celda.id);
    if (celda.innerHTML == "") {
        celda.innerHTML = "O";
    } 
    eliminarCeldaArray(celda);
    
}

function eliminarCeldaArray(elemento) { //celda1
    console.log(casillas);
    alert(elemento);
    //document.getElementById(elemento).classList.remove("juega");
    for(var cont = 0; cont < casillas.length; cont++){
        if(elemento == casillas[cont]){
            delete casillas[casillas.indexOf(elemento)];
            //casillas.splice(cont, 1);
        }
    } 
    console.log(casillas);   
} 

