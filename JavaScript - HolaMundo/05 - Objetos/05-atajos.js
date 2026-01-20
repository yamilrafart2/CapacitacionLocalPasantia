/**
 * El camino largo de crear objetos en JavaScript es usando la palabra reservada "new"
 * seguida del constructor del objeto que queremos crear.
 * 
 * El camino corto es usando los "atajos literales" que JavaScript nos provee.
 * 
 * Los atajos literales son formas abreviadas de crear objetos, arreglos, cadenas,
 * números y booleanos.
 * 
 */

let obj = {};
let obj2 = new Object();

/*
    new Array()  -->  []
    new String() -->  "" '' ``
    new Number() -->  0 123
    new Boolean()-->  false true
*/

function Usuario() {
    this.name = 'Chanchito Feliz';
};

let usuario = new Usuario();
console.log(usuario);
console.log(usuario.constructor);

/*
    typeof ""         --> "string"
    typeof new String() --> "object"
    typeof 123        --> "number"
    typeof new Number() --> "object"
    typeof false      --> "boolean"
    typeof new Boolean() --> "object"
*/

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1); // 1 + 1
console.log(s2); // [String: '1 + 1']
console.log(eval(s1), eval(s2));
console.log(s2.valueOf()); // "1 + 1"