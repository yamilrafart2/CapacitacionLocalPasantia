/**
 * Referencia vs Valor
 * Primitivos vs Objetos
 */

let a = 1;
let b = a;

b++;
console.log(a, b);

let c = { };
let d = c;

d.propiedad = 1;
console.log(c, d);

function suma(n) {
    n++;
}
suma(a);
console.log(a);

function suma(n) {
    n.propiedad++;
}
let objeto = { propiedad: 1 };
suma(objeto);
console.log(objeto);

/*
    Primitivos -> Se copian los valores
    Objetos -> Se copian las referencias -> Objetos, Arrays, Funciones
*/