const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando...');
    }
};

// delete punto.dibujar;
// punto.dibujar(); // Error: punto.dibujar is not a function
if ('dibujar' in punto) {
    punto.dibujar();
}

console.log(Object.keys(punto)); // ['x', 'y', 'dibujar']
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}