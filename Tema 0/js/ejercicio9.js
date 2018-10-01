function protegerEmail(email) {
    
    var correoPartido = email.split("@");
    var parteTexto = correoPartido[0].split("");

    document.write(parteTexto[0]);

    for (let index = 1; index < parteTexto.length - 1; index++) {
        
        document.write("#");
        
    }
    return parteTexto[parteTexto.length - 1] + "@" + correoPartido[1];
}


document.write(protegerEmail("diego.garcia@ieslasenia.org"));