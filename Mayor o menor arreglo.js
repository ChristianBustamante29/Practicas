function mayor(...numbers){
    let result = -Infinity;
    for(number of numbers){
        if(number > result) result = number;
    }
    return result;
}

function menor(...numbers){
    let result = Infinity;
    for(number of numbers){
        if(number < result) result = number;
    }
    return result;
}

let numbers = [5, 10, 20, 100, 200];

console.log(mayor(...numbers));
console.log(menor(...numbers));