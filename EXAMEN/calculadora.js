window.addEventListener("load", cargar, false);
function cargar() {

    window.addEventListener('keydown', moveSelection);

    //Numerico
    document.getElementById("1").addEventListener("click", anyadir);
    document.getElementById("2").addEventListener("click", anyadir);
    document.getElementById("3").addEventListener("click", anyadir);
    document.getElementById("4").addEventListener("click", anyadir);
    document.getElementById("5").addEventListener("click", anyadir);
    document.getElementById("6").addEventListener("click", anyadir);
    document.getElementById("7").addEventListener("click", anyadir);
    document.getElementById("8").addEventListener("click", anyadir);
    document.getElementById("9").addEventListener("click", anyadir);
    document.getElementById("0").addEventListener("click", anyadir);

    //Botones
    document.getElementById("C").addEventListener("click", teclaC);
    document.getElementById("%").addEventListener("click", anyadir);
    document.getElementById("borrar").addEventListener("click", botonBorrar);
    document.getElementById("/").addEventListener("click", anyadir);
    document.getElementById("*").addEventListener("click", anyadir);
    document.getElementById("-").addEventListener("click", anyadir);
    document.getElementById("+").addEventListener("click", anyadir);
    document.getElementById("deci").addEventListener("click", decimales);
    document.getElementById("paren").addEventListener("click", parentesis);
    document.getElementById("result").addEventListener("click", resolver);
    anyadirSombra();

}

var resultado = 0;
var disponibleOp = false;
var disponibleDeci = true;

function anyadir() {
    var tecla = this.id;
    var pantallaCalc = document.getElementById("pant");

    if (pantallaCalc.value == 0 && tecla != "/" && tecla != "*" && tecla != "." && tecla != "-" && tecla != "+" && tecla != "%") {
        pantallaCalc.value = tecla;
    } else {
        if (!disponibleOp) {
            pantallaCalc.value = pantallaCalc.value + tecla;
            disponibleOp = true;
        } else {
            if (tecla != "/" && tecla != "*" && tecla != "-" && tecla != "+" && tecla != "%" && tecla != ".") {
                pantallaCalc.value = pantallaCalc.value + tecla;
                disponibleOp = false;
            }
        }
    }
}

function anyadirSombra() {
    var botones = document.getElementsByClassName('boton');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("mousedown", sombraInterior);
        botones[i].addEventListener("mouseup", adiosSombra);
    }
}

function adiosSombra() {

    document.getElementById(this.id).removeAttribute("style");

}

function sombraInterior() {

    document.getElementById(this.id).style.boxShadow = "5px 5px 25px #222 inset";

}

function resolver() {
    var pantallaCalc = document.getElementById("pant");

    if (pantallaCalc.value.search("%") != -1) {
        var numeros = pantallaCalc.value.split("%")

        resultado = (eval(numeros[0]) * eval(numeros[1])) / 100;

    } else {
        resultado = eval(pantallaCalc.value);
    }

    pantallaCalc.value = resultado;
    disponibleOp = false;
    disponibleDeci = true;
}

function teclaC() {
    var pantallaCalc = document.getElementById("pant");

    pantallaCalc.value = 0;
    resultado = 0;
    disponibleOp = false;
    disponibleDeci = true;
}

function botonBorrar() {
    var pantallaCalc = document.getElementById("pant");
    var subPantalla = pantallaCalc.value.substring(pantallaCalc.value.length - 1, pantallaCalc.value.length);

    if (subPantalla == "/" || subPantalla == "*" || subPantalla == "-" || subPantalla == "+" || subPantalla == "%") {
        disponibleOp = false;
    }
    if (pantallaCalc.value.length == 1) {
        pantallaCalc.value = 0;
    } else {
        pantallaCalc.value = pantallaCalc.value.substring(0, pantallaCalc.value.length - 1);
    }

}

function decimales() {
    var pantallaCalc = document.getElementById("pant");

    if (disponibleDeci && pantallaCalc.value != 0) {
        pantallaCalc.value = pantallaCalc.value + ".";
        disponibleDeci = false;
    }
}

function parentesis() {
    var pantallaCalc = document.getElementById("pant");

    if (pantallaCalc.value != 0) {
        pantallaCalc.value = "(" + pantallaCalc.value + ")";
        disponibleOp = false;
    }

}

function moveSelection(evt) {
    switch (evt.keyCode) {

        //NUMEROS
        case 97:
            document.getElementById("1").click();
            break;
        case 98:
            document.getElementById("2").click();
            break;
        case 99:
            document.getElementById("3").click();
            break;
        case 100:
            document.getElementById("4").click();
            break;
        case 101:
            document.getElementById("5").click();
            break;
        case 102:
            document.getElementById("6").click();
            break;
        case 103:
            document.getElementById("7").click();
            break;
        case 104:
            document.getElementById("8").click();
            break;
        case 105:
            document.getElementById("9").click();
            break;
        //OPERACIONES

        case 192:
            document.getElementById("/").click();
            break;
        case 106:
            document.getElementById("*").click();
            break;
        case 109:
            document.getElementById("-").click();
            break;
        case 107:
            document.getElementById("+").click();
            break;
        case 80:
            document.getElementById("%").click();
            break;
        case 27:
            document.getElementById("C").click();
            break;
        case 8:
            document.getElementById("borrar").click();
            break;
        case 110:
            document.getElementById("deci").click();
            break;

        case 56:
            document.getElementById("paren").click();
            break;

        case 13:
            document.getElementById("result").click();
            break;
//DESPUES DE ENTREGAR EL EXAMEN
        case 96:
            document.getElementById("0").click();
            break;

    }
}