// short-circuit

// FALSO -> FALSY
/*
    false
    0
    ''
    null
    undefined
    NaN
*/
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

nombre = 'Chanchito feñiz';
username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy función 1');
    // return true;
    return false;
}

function fn2() {
    console.log('soy función 2');
    return true;
}

let x = fn1() && fn2();