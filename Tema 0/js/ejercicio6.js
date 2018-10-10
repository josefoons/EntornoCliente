function nombresMes(fecha) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var nose = fecha.split("/");
    return meses[nose[1] - 1];
}

document.write(nombresMes("10/02/2009"));