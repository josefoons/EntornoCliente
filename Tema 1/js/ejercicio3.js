function dni(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni
    let correcto = false;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);

        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            //
        } else {
            correcto = true;
        }
    }

    return correcto;
}


function telefono(telefono) {

    let correcto = false;

    if (/^([0-9]{9})$/i.test(telefono)) {

        correcto = true;

    }

    return correcto;
}

function correo(correo) {

    let correcto = false;

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)) {
        correcto = true;
    }

    return correo;
}

function ip(ip) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
        correcto = true;
    }
    
    return correcto;
}

function url(url) {

    let correcto = false;

    var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
      '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
      '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
      '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
      '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
      '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(pattern.test(url)) {
      correcto = true;
    }
  }


  var dni = prompt("Dime tu dni");
  var telefono = prompt("Dime el telefono");
  var correo = prompt("Dime el correo");
  var ip = prompt("Dime la IP");
  var url = prompt("Dime la url");

  if (dni(dni) && telefono(telefono) && correo(correo) && ip(ip) && url(url)) {
      document.write("YESSSSSSSSS");
  } else {
      document.write("SUICIDIO");
  }