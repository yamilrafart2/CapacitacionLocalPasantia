/*
    Crear algoritmo que devuelva la cantidad de número positivos de un array.
*/

let array = [2, 5, 7, 15, -5, -100, 55];

/**
 * EJERCICIO 06
 * Cuenta la cantidad de números positivos en un array.
 * @param {*} arr 
 * @returns 
 */
function cuantosPositios(arr) {
    let contador = 0;
    for (const numero of arr) {
        if (numero > 0) {
            contador++;
        }
    }
    return contador;
}

let resultado = cuantosPositios(array);
console.log(resultado); // 5
