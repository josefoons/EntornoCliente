var fecha = new Date();

if (fecha instanceof Date && !isNaN(fecha.valueOf())) {
  document.write("Variable tipo date");
} else {
  document.write("Variable no tipo date");
}
