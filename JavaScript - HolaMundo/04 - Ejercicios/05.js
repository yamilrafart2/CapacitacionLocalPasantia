/*
    Crear algoritmo que devuelva el número menor y major de un array.
*/

let array = [2, 5, 7, 15, -5, -100, 55];

/**
 * EJERCICIO 05
 * Devuelve el número menor y mayor de un array.
 * @param {*} arr 
 * @returns 
 */
function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (const numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros); // Debe devolver: [-100, 55]
