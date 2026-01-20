/**
 * Funciones Constructoras
 * Las funciones constructoras son una forma especial de definir objetos en JavaScript.
 * Se utilizan para crear múltiples instancias de un objeto con las mismas propiedades y métodos.
 * Por convención, las funciones constructoras comienzan con una letra mayúscula.
 * Cuando se llama a una función constructora, se utiliza la palabra clave 'new' para crear una nueva instancia del objeto.
 * Dentro de la función constructora, 'this' se refiere a la nueva instancia que se está creando.
 * Las propiedades y métodos se asignan a 'this' para que cada instancia tenga sus propias copias.
 * Además, las funciones constructoras pueden utilizar los métodos 'call' y 'apply' para invocar la función con un contexto específico.
 * 'call' permite pasar argumentos de forma individual, mientras que 'apply' permite pasar un array de argumentos.
 * Aunque es posible crear funciones constructoras utilizando el objeto 'Function', no es una práctica recomendada debido a problemas de rendimiento y legibilidad del código.
 * En su lugar, es preferible utilizar la sintaxis de función estándar para definir funciones constructoras. 
 */

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); };
}

let punto = { z: 7 };
Punto.call(punto, 1, 2);
console.log(punto);

Punto.apply(punto, [1, 2]);
console.log(punto);

// NO RECOMENDADO USAR ESTA FORMA
// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log('Dibujando...'); };
// `);

// const p = new Point(1, 2);
// console.log(p);
// p.dibujar();