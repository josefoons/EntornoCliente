
function cargarValores() {
    var valores = document.getElementsByTagName("p");
    for (let index = 0; index < valores.length; index++) {
        alert(valores[index].innerText);
    }
}