
var frase = prompt("Dime una frase");
var numero = prompt("Dime cuanto");
var porDonde = prompt("Dime inicio o fin");
var tamanyo = 0;

var array = frase.split('');

if (porDonde == "fin") {

    tamanyo = array.length;
    tamanyo = tamanyo - numero;

    for (let index = 0; index < numero; index++) {
        document.write(array[tamanyo + index]);        
    }
} else {
    if (porDonde == "inicio") {
        for (let index = 0; index < numero; index++) {
            document.write(array[index]);        
        }
    } else {
        document.write("Eres muy tonto.");
    }
}

