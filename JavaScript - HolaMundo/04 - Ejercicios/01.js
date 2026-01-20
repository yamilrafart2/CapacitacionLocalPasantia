/**
 * EJERCICIO 01
 * Escribir una función que reciba dos números y devuelva el mayor de ellos.
 * Si son iguales, devolver undefinde.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return undefined;
    }
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
