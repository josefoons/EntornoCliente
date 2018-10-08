function correo(mail) {
    if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail.value))) {
        document.getElementById("fmail").style.color = 'darkred';
        return alert("Error en el correo.");
    } else {
        document.getElementById("fmail").style.color = 'green';
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
            document.getElementById("fdni").style.color = 'darkred';
            return alert("Error en el DNI.");
        } else {
            document.getElementById("fdni").style.color = 'green'; //Cambiar de color a verde si esta bien
        }
    } else {
        document.getElementById("fdni").style.color = 'darkred';
        return alert("Error en el DNI.");
    }
}

function ip(direccion) {
    if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(direccion.value))) {
        document.getElementById("fip").style.color = 'darkred';
        return alert("Error en la IP.");
    } else {
        document.getElementById("fip").style.color = 'green';
    }
}

function datoAMayus(dato) {
    dato.value = dato.value.toLowerCase();
    var charArray = dato.value.split("");
    charArray[0] = charArray[0].toUpperCase();
    dato.value = charArray.join("");
}

var contrasenya = 0;

function getPass(passN) {

    /*
    
    Minimo 8 caracteres
    Al menos una letra mayúscula
    Al menos una letra minucula
    Al menos un dígito
    No espacios en blanco
    
    Aa1RRRRR
    
    */

    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}$/.test(passN.value))) {
        document.getElementById("fpass").style.color = 'darkred';
        return alert("Contraseña no valida");
    } else {
        document.getElementById("fpass").style.color = 'green';
    }

    contrasenya = passN.value;
}

function validarContrasenya(pass) {
    var validacion = pass.value;

    if ((contrasenya != validacion)) {
        document.getElementById("fpassRepit").style.color = 'darkred';
        return alert("No coinciden");
    }  else {
        document.getElementById("fpassRepit").style.color = 'green';
    }
}