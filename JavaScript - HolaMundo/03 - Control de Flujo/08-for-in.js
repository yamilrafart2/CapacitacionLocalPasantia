let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (const propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (const indice in animales) {
    console.log(indice, animales[indice]);
    
}