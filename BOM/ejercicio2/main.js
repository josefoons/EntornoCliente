window.addEventListener("load", cargar, false);
function cargar() {
    document.getElementById("estado").addEventListener("click", iniciarVideo);
}

function iniciarVideo() {
    var padre = this.parentNode; //etiqueta img
    var abuelo = padre.parentNode; //etiqueta li
    var bis = abuelo.parentNode; //etiqueta ul
    var tatara = bis.parentNode; //div controladores
    var video = tatara.getElementsByTagName("video"); //pillar video
    /* video[0].play(); */

    if(video[0].playing){ 
        this.src = "img/pause.png";
        this.addEventListener("click", video[0].pause());
    } else {
        this.src = "img/play.png";
        this.addEventListener("click", video[0].play());
    }
}