window.addEventListener("load", cargar, false);
function cargar() {
    document.getElementById("estado").addEventListener("click", iniciarVideo);
    document.getElementById("silencio").addEventListener("click", silencio);
    document.getElementById("subirVolumen").addEventListener("click", subirVolumen);
    document.getElementById("bajarVolumen").addEventListener("click", bajarVolumen);
    document.getElementById("volverInicio").addEventListener("click", volverInicio);
    document.getElementById("irFinal").addEventListener("click", finalVideo);
    document.getElementById("volverAtras").addEventListener("click", volverAtras);
    document.getElementById("irAlante").addEventListener("click", irAlante);
}

function obtenerVideo(element) {
    var padre = element.parentNode; //etiqueta img
    var abuelo = padre.parentNode; //etiqueta li
    var bis = abuelo.parentNode; //etiqueta ul
    var tatara = bis.parentNode; //div controladores
    var video = tatara.getElementsByTagName("video"); //pillar video

    return video[0];
}


function iniciarVideo() {

    var video = obtenerVideo(this);

    if(video.paused){
        video.play();
        this.src = "img/pause.png";
    } else {
        video.pause();
        this.src = "img/play.png";
    }
}

function silencio() {

    var video = obtenerVideo(this);

    if(video.volume != 0) {
        video.volume = 0;
    } 
}

function subirVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;

    if(video.volume >= 0 && video.volume < 0.9){
        video.volume = actualVolumen + 0.1;
    }

}

function bajarVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;

    if(video.volume <= 1 && video.volume > 0.1){
        video.volume = actualVolumen - 0.1;
    } 
}

function volverInicio() {
    var video = obtenerVideo(this);

    video.currentTime = 0.0;
}

function finalVideo() {
    var video = obtenerVideo(this);
    var videoTotal = video.duration;

    video.currentTime = videoTotal;
}

function volverAtras() {
    var video = obtenerVideo(this);
    var videoActual = video.currentTime;

    video.currentTime = videoActual - 5.0;

}

function irAlante() {
    var video = obtenerVideo(this);
    var videoActual = video.currentTime;

    video.currentTime = videoActual + 5.0;

}

