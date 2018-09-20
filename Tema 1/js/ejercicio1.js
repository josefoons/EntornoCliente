var arr = new Array();
var tamanyo = prompt("Dime el tamanyo del array.");

for (let index = 0; index < tamanyo; index++) {
    var name = prompt("Introduce un numero");
    arr.push(name);
}

document.write(arr);