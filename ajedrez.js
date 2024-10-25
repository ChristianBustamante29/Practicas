let size = prompt('Elije el tamaño');

let board = "";
for(let y = 1; y <= size; y++){
    for(let x = 1; x <= size; x++){
        if((x+y) % 2 == 0){
            board += " ";
    } else {
        board += "#";
    }
}
board += "\n";
}

console.log(board);
