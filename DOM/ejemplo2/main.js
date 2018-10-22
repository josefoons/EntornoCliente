var patata = document.getElementById("cosa").addEventListener("click", coords, false);

function coords() {
    var x = patata.clientX;
    var y = patata.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
}