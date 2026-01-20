/**
 * Constructor Function
 * ====================
 * 
 * Una función constructora es una función especial que se utiliza para crear objetos.
 * Se define utilizando la palabra clave 'function' y se invoca con la palabra clave 'new'.
 * Dentro de la función constructora, 'this' se refiere al nuevo objeto que se está creando.
 * 
 * Convenciones:
 * - El nombre de la función constructora debe comenzar con una letra mayúscula.
 * - Se utilizan para crear múltiples instancias de un mismo tipo de objeto.
 *
 */

// {id: 1, recuperarClave: function() { } }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function() {
        console.log("Recuperando clave...");
    };
}

const usuario = new Usuario();
console.log(usuario);
usuario.recuperarClave();