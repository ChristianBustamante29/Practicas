function mayor(a, b){
    return a > b ? a : (a == b) ? 'Son iguales' : b;
}

function menor(a, b){
    return a < b ? a : (a == b) ? 'Son iguales' : b;
}

console.log(mayor(10, 30));
console.log(menor(20, 30));