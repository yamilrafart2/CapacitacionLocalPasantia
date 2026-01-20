/*
    Crear algoritomo que devuelva un array de objetos en base a pares
*/

let pairs = [
    [1, {id: 1, name: 'Nicolas'}],
    [2, {id: 2, name: 'Felipe'}],
    [3, {id: 3, name: 'Chanchito'}],
];

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
 * EJERCICIO 09
 * Convierte un array de pares en una colección de objetos.
 * @param {*} arr 
 * @returns 
 */
function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1]; // Accedemos al segundo elemento del par
        collection[idx].id = elemento[0]; // Aseguramos que el id esté correcto    
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado); // Debe mostrar el array 'array'