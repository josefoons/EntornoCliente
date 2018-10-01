export default class libro {

    constructor(titulo, autor, pais, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.pais = pais;
        this.isbn = isbn;
    }

    getTitulo() {
        return this.titulo;
    }

    getAutor() {
        return this.autor;
    }

    getPais() {
        return this.pais;
    }

    getISBN() {
        return this.isbn;
    }

    setTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    setAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    setPais(nuevoPais) {
        this.pais = nuevoPais;
    }

    setISBN(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }
}