/**
 * Funciones como Constructores y First Class Citizens
 * Las funciones en JavaScript son ciudadanos de primera clase (First Class Citizens),
 * lo que significa que pueden ser tratadas como cualquier otro valor.
 * Pueden ser asignadas a variables, pasadas como argumentos a otras funciones,
 * y retornadas desde otras funciones.
 * 
 * Además, las funciones pueden actuar como constructores para crear objetos.
 * Cuando se utilizan con la palabra clave 'new', una función puede crear una nueva instancia de un objeto.
 */

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // "Usuario"
console.log(Usuario.length); // 1

const U = Usuario;
let user = new U("Nicolas");
console.log(user); // Usuario { nombre: 'Nicolas' }

function of(Fn, arg) {
    return new Fn(arg);
}
let user1 = of(Usuario, "Juan");
console.log(user1); // Usuario { nombre: 'Juan' }

function returned() {
    return function () {
        console.log("Hola Mundo!");
    };
}
let saludo = returned();
saludo(); // "Hola Mundo!"

