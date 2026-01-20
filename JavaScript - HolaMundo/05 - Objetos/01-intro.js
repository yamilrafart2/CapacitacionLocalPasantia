// let email = 'nico@holamundo.io';
// let nombre = 'Nicolás';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// };

/**
 * Programación orientada a objetos - POO
 * Un objeto es una colección de propiedades.
 * Una propiedad es una asociación entre un nombre y un valor.
 * El valor de una propiedad puede ser un valor primitivo, otro objeto o una función.
 * Cuando el valor de una propiedad es una función, se le llama método.
 */
let usuario = {
    email: 'nico@holamundo.io',
    nombre: 'Nicolás',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function() {
        console.log('Recuperando clave...');
        
    },
};

console.log(usuario);