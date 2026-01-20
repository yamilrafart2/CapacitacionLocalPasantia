/**
 * Objetos dinámicos:
 * - Podemos agregar propiedades y métodos a un objeto después de haberlo creado.
 * - Esto nos permite modificar y extender objetos según sea necesario.
 * - También podemos eliminar propiedades y métodos de un objeto.
 * - Esto es útil para gestionar la memoria y mantener los objetos limpios.
 */

const user = { id: 1 };

user.name = 'Nicolás';
user.guardar = function() {
    console.log('Guardando', user.name);
};

user.guardar();

delete user.name;
delete user.guardar;

console.log(user); // { id: 1 }

/**
 * Objetos congelados:
 * - Podemos usar Object.freeze() para evitar que un objeto sea modificado.
 * - Una vez congelado, no se pueden agregar, eliminar o cambiar propiedades o métodos.
 * - Esto es útil para crear objetos inmutables que no deben ser alterados.
 */
const user1 = Object.freeze({ id: 1 });
user1.name = 'Nicolás'; // No tendrá efecto
user1.id = 2; // No tendrá efecto
console.log(user1); // { id: 1 }

/**
 * Objetos sellados:
 * - Podemos usar Object.seal() para evitar que se agreguen o eliminen propiedades de un objeto.
 * - Sin embargo, las propiedades existentes aún pueden ser modificadas.
 * - Esto es útil cuando queremos proteger la estructura del objeto pero permitir cambios en sus valores.
 */
const user2 = Object.seal({ id: 1 });
user2.name = 'Nicolás';
user2.id = 2; // No tendrá efecto
console.log(user2); // { id: 1, name: 'Nicolás' }