function esPar(n){
    if(n <= 0){
        return false;
    } else {
        return n % 2 === 0;
    }
}


console.log(esPar(-5));
console.log(esPar(5));
console.log(esPar(10));
console.log(esPar(25));