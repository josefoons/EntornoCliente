var arr = new Array();
var tamanyo = prompt("Dime el tamanyo del array.");
var mayor = -1;

for (let index = 0; index < tamanyo; index++) {
    var numero = prompt("Introduce un numero");
    arr.push(numero);

    if(numero > mayor) {
        mayor = numero;
    }
}

document.write("El mayor es " + mayor);