/*
    Crear un algoritmo que tome un array de objetos y devuelva un array de pares
*/

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

/**
 * EJERCICIO 08
 * Crea una función que convierta un array de objetos en un array de pares.
 * @param {*} arr 
 * @returns 
 */
function toPairs(arr) {
    let pares = [];
    for (const idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento];
    }
    return pares;
}

let resultado = toPairs(array);
console.log(resultado); // Debe mostrar el array 'pares'
/*
    let pares = [
        [1, {id: 1, name: 'Nicolas'}],
        [2, {id: 2, name: 'Felipe'}],
        [3, {id: 3, name: 'Chanchito'}],
    ];
*/