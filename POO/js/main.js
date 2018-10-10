import persona from "./persona.js";
import libro from "./libro.js";

var person = new persona("carlos", "calle falsa", "73599688X", "649891176");
var book = new libro("Mi Libro", "Francisco Franco", "Espanya", "15181818");


console.log(person.getNombre());
person.setNombre("jose");
console.log(person.getNombre());

console.log(book.getAutor());
book.setAutor("Marcos");
console.log(book.getAutor());