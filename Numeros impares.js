function esImpar(n){
    if(n == 0) return true;
    else if(n == 1) return false;
    else if(n < 0) return esImpar(-n);
    else return esImpar(n - 2);
}

console.log(esImpar(5));
console.log(esImpar(0));
console.log(esImpar(-10));


// function esPar(n){
//     if (n <= 0){
//         return false;
//     } else {
//         return n % 2 === 0; 
//     }
// }