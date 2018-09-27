
function hazmeFeliz(value) {

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
    if (hazmeFeliz(i)) {
        document.write("Numero Feliz: " + i + "<br>")
    }
}