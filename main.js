/*
    Dato un array e un elemento da cercare, restiusca vero se l'elemento è presente nell'array oppure falso
*/

function inArray(arr, elm) {
    let index = 0;

    while(index < arr.length) {
        if( arr[index] === elm ) {
           return true;
        }
        index++;
    }

    return false;
}

console.log(inArray(["anna","paolo","federica"], "paolo")); // true