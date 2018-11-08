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
    document.getElementById("videoFull").addEventListener("timeupdate", barraVideo, false);
    document.getElementById("oculto").addEventListener("click", saltarPubli);
    document.getElementById("videoFull").addEventListener("mouseover", mostrarInfo);
    document.getElementById("videoFull").addEventListener("mouseout", quitarInfo);

    //botones de video
    document.getElementById("video0").addEventListener("click", cambiarVideo);
    document.getElementById("video1").addEventListener("click", cambiarVideo);
    document.getElementById("video2").addEventListener("click", cambiarVideo);

    //Funciones a iniciar al cargar
    intervalo();
    cuentaAtras();
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

    if (video.paused) {
        video.play();
        this.src = "img/pause.png";
    } else {
        video.pause();
        this.src = "img/play.png";
    }

}

function silencio() {

    var video = obtenerVideo(this);
    var barra = document.getElementById("barraVolumen");

    if (video.volume != 0) {
        video.volume = 0;
        barra.value = 0;
    }
    mostrarBarraVolumen();
}

function subirVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;
    var barra = document.getElementById("barraVolumen");

    if (video.volume >= 0 && video.volume < 0.9) {
        video.volume = actualVolumen + 0.1;
        barra.value = (actualVolumen + 0.1) * 100;
    } else {
        if (video.volume == 0.9) {
            barra.value = 100;
        }
    }
    mostrarBarraVolumen();
}

function bajarVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;
    var barra = document.getElementById("barraVolumen");

    if (video.volume <= 1 && video.volume > 0.1) {
        video.volume = actualVolumen - 0.1;
        barra.value = (actualVolumen - 0.1) * 100;
    }
    mostrarBarraVolumen();
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

function barraVideo() {
    var momentoVideo = this.currentTime;
    var total = this.duration;
    var barra = document.getElementById("barraVideo");

    barra.value = (100 * momentoVideo) / total;
}

function activarPubli() {
    var oculto = document.getElementById("oculto");
    oculto.style.visibility = "visible";
    oculto.addEventListener("click", saltarPubli);
    intervalo();
}

function intervalo() {
    setTimeout(activarX, 10000);
}

function activarX() {
    document.getElementById("salirPubli").style.visibility = "visible";
    document.getElementById("salirPubli").addEventListener("click", salirPubli);
    document.getElementById("oculto").removeEventListener("click", saltarPubli);
}

function salirPubli() {
    var publi = document.getElementById("oculto");
    publi.style.visibility = "hidden";
    document.getElementById("salirPubli").style.visibility = "hidden";
    //setTimeout(actualVideoTitulo, 10000);
}

function saltarPubli() {
    var web = "./publi.html";
    window.open(web);
}

function cambiarVideo() {

    var id = this.id;
    var video = document.getElementById("videoFull");
    var newVideo = "./vid/" + id + ".mp4";

    video.pause();
    video.src = newVideo;
    video.load();
    document.getElementById("estado").src = "img/play.png";
    document.getElementById("barraVideo").value = 0;
    cambiarTitulo(id);
    activarPubli();
    //actualVideoTitulo("visible");
}


function mostrarBarraVolumen() {

    var barraVolumen = document.getElementById("barraVolumen");
    barraVolumen.style.visibility = "visible";
    setTimeout(ocultar, 1500);

}

function ocultar() {
    var barraVolumen = document.getElementById("barraVolumen");
    barraVolumen.style.visibility = "hidden"
}

function cambiarTitulo(element) {

    var titulo = document.getElementById("tituloVideo");
    titulo.innerText = element;

}

/* function actualVideoTitulo(forma) {
    var titulo = document.getElementById("tituloVideo");

    if(forma == "visible"){
        titulo.style.visibility = "visible";
    } else {
        titulo.style.visibility = "hidden";
    }
} */

function mostrarInfo() {
    
    var barra = document.getElementById("barraVideo");
    var titulo = document.getElementById("tituloVideo");

    titulo.style.visibility = "visible";
    barra.style.visibility = "visible";


}

function quitarInfo() {
    
    var barra = document.getElementById("barraVideo");
    var titulo = document.getElementById("tituloVideo");

    barra.style.visibility = "hidden";
    titulo.style.visibility = "hidden";

}

function cuentaAtras() {
    
    var count = 10;
    var number = document.getElementById('contador');
    var intervalo = setInterval(function(){
                       count--;
                       number.innerHTML = count;
                       if(count == 0){
                         clearInterval(intervalo);
                         number.innerHTML = "";
                       }
                      }, 1000);


}