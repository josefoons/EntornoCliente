var arr = new Array();
var inicio = 1;

for (let index = 0; index < 5; index++) {
    

    arr = inicio.toString().split("");
    var suma = 0;

    for (let index = 0; index < arr.length; index++) {
        var suma = Math.pow(arr[index],2) + suma;
    }

    arr = new Array();
    document.write(suma + "<br>");
    inicio = suma;

}