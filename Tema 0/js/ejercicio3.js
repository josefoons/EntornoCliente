function documento(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}


function telf(telefono) {

    return /^(6|7|9)[0-9]{8}$/i.test(telefono);
}

function mail(correo) {
    return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo);
}



function direccion(ip) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
}

function link(url) {
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(url)) {
        return true;
    }
    else {
        return false;
    }
}


var dni = prompt("Dime tu dni");
var telefono = prompt("Dime el telefono");
var correo = prompt("Dime el correo");
var ip = prompt("Dime la IP");
var url = prompt("Dime la url");

if (documento(dni)) {
    document.write("El dni es correcto. ");
} else {
    document.write("El dni NO es correcto. ");
}
document.write(dni);

if (telf(telefono)) {
    document.write("<br>" + "El telefono es correcto. ");
} else {
    document.write("<br>" + "El telefono NO es correcto. ");
}
document.write(telefono);

if (mail(correo)) {
    document.write("<br>" + "El correo es correcto. ");
} else {
    document.write("<br>" + "El correo NO es correcto. ");
}
document.write(correo);

if (direccion(ip)) {
    document.write("<br>" + "La direccion IP es correcta. ");
} else {
    document.write("<br>" + "La direccion IP NO es correcta. ");
}
document.write(ip);

if (link(url)) {
    document.write("<br>" + "La direccion web es correcta. ");
} else {
    document.write("<br>" + "La direccion web NO es correcta. ");
}
document.write(url);