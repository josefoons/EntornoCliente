function diasMes(mes, anyo) {
	return new Date(anyo, mes, 0).getDate();
}

var mes = prompt("Dime el mes en numero");
var anyo = prompt("Dime el año");
var dias = diasMes(mes, anyo);


document.write(dias);