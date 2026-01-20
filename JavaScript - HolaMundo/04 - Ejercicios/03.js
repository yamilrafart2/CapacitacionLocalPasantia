/*
    Indice: validar que no sea menor a cero y que el elemento exista en el array
*/

/**
 * EJERCICIO 03
 * Crear una función que reciba un array y un índice y devuelva el elemento que se encuentra en esa posición del array.
 * Si el índice es menor a 0 o mayor o igual al tamaño del array, la función debe devolver 'Elemento no encontrado'.
 * @param arr 
 * @param idx 
 * @returns 
 */
function getByIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'Elemento no encontrado';
    } else {
        return arr[idx];
    }
}

let resultado = getByIdx([1, 2], 2);
console.log(resultado); // 2