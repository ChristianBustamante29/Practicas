for(let n = 1; n <= 100; n++){
    let result = "";
    if(n % 3 == 0) result= "Fizz";
    if(n % 5 == 0) result= "Buzz";
    if(n % 3 == 0 && n % 5 == 0) result= "Fizzbuzz";
console.log(result || n);
}