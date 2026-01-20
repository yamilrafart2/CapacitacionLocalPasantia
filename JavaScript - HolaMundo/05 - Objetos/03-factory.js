/**
 * Factory Functions
 * Las factory functions son funciones que retornan objetos.
 * Nos permiten crear múltiples objetos similares sin repetir código. 
 */

// let user = {
//     id: 1,
//     email: 'nico@holamundo.io',
//     name: 'Nicolás',
//     activo: true,
//     recuperarClave: function() {
//         console.log('recuperando clave...');
//     },  
// };

// let user1 = {
//     id: 2,
//     email: 'chanchito@holamundo.io',
//     name: 'Chanchito',
//     activo: false,
//     recuperarClave: function() {
//         console.log('recuperando clave...');
//     },  
// };

function crearUsuario(name, email) {
    return {
        email, // email: email
        name, // name: name
        activo: true,
        recuperarClave: function() {
            console.log('recuperando clave...');
        },  
    }; 
}

let user1 = crearUsuario('Nicolás', 'nico@holamundo.io');
let user2 = crearUsuario('Chanchito', 'chanchito@holamundo.io');

console.log(user1);
console.log(user2);