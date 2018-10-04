function correo(mail) {
    if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail.value))) {
        return alert("Error en el correo.");
    }
}

function documento(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test((dni.value)) == true) {
        numero = (dni.value).substr(0, (dni.value).length - 1);
        letr = (dni.value).substr((dni.value).length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            return alert("Error en el DNI.");
        } else {
            document.getElementById("fdni").style.color = 'green'; //Cambiar de color a verde si esta bien
        }
    } else {
        return alert("Error en el DNI.");
    }
}

function ip(direccion) {
    if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(direccion.value))) {
        return alert("Error en la IP.");
    }
}

function datoAMayus(dato) {
    dato.value = dato.value.toLowerCase();
    var charArray = dato.value.split("");
    charArray[0] = charArray[0].toUpperCase();
    dato.value = charArray.join("");
}