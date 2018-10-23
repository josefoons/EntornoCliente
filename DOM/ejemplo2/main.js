
document.addEventListener("DOMContentLoaded",cargar,false);
function cargar() {
    document.getElementById('cosa').addEventListener("click", coords, false);
}





function coords(evento) {
                
    var x = evento.clientX;
    var y = evento.clientY;
    
    document.getElementById('demo').innerHTML = " X = " + x + "][ Y = " + y;
    
}