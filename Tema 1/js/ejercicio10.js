function camelCase(texto) {

    var resultado = texto.split(" ");

    resultado[0] = MimusPrimera(resultado[0]);

    for (let index = 1; index < resultado.length; index++) {

        resultado[index] = MaysPrimera(resultado[index]);

    }


    return resultado.join("");
}

function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function MimusPrimera(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}



document.write(camelCase("Superman es Débil"));