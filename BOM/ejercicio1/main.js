var resultadoURL = location.search;
var resultadoURL = (resultadoURL).substring(1, resultadoURL.length);

var todo = resultadoURL.split("&");

var nombre = (todo[0].split("="))[1];
var apellido = (todo[1].split("="))[1];
var correo = (todo[2].split("="))[1];
correo = correo.split("%40");
correo = correo[0] + "@" + correo[1];

alert("El usuario " + nombre + " " + apellido + ", tiene como direccion de correo electrónico, " + correo);

