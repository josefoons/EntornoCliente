/* var arr = new Array();
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

} */

function beHappy(value) {

    let repeat = [];

    while (value > 1 && !~repeat.indexOf(value)) {
        let result = 0;

        repeat.push(value);

        for (let n of value.toString().split("")) {

            result += Math.pow(n, 2)
        }

        value = result;
    }

    return value == 1;
}

for (let i = 0; i <= 20; i++) {
    if (beHappy(i)) {
        document.write(i + "<br>")
    }
}