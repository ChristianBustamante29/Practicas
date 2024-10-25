// Crea una funcion que identifique los numeros primos

function esPrimo(n){
    if(n <= 1){
        return false;
    }
for(let i = 2; i < Math.sqrt(n); i++){
    if(n % i == 0){
        return false;
    }
}
return true;
}

console.log(esPrimo(1));
console.log(esPrimo(2));
console.log(esPrimo(5));
console.log(esPrimo(10));
