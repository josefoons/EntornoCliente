function hola (input){
    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
      return true;
    } else {
      return false;
    }
  }


var usuario = prompt("Fecha pls");
var cosa = usuario.split("/");
var dt = new Date(cosa[0] + '/' + cosa[1] + '/' + cosa[2]);


 if (hola(usuario)) {
     document.write("yes");
 }