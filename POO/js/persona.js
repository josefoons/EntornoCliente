export default class persona {

    constructor(nombre, direccion, dni, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }

    getNombre() {
        return this.nombre;
    }

    getDireccion() {
        return this.direccion;
    }

    getdni() {
        return this.dni;
    }

    getTelefono() {
        return this.telefono;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }

    setdni(nuevoDni) {
        this.dni = nuevoDni;
    }

    setTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }
}