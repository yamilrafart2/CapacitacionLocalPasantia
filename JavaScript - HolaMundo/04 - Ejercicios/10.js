/*
    Crear un array de longitud N, y que sus elementos sean números de 1 a N
*/

let longitud = 7;

/**
 * EJERCICIO 10
 * Crea un array de longitud n, con valores del 1 a n.
 * Si n es menor o igual a 0, debe devolver un array vacío.
 * @param {*} n 
 * @returns 
 */
function crearArray(n) {
    if (n <= 0) {
        return [];
    } else {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = i + 1;
        }
        return arr;
    }
}

let resultado = crearArray(longitud);
console.log(resultado); // [1,2,3,4,5,6,7]