/*
Scrivi una funzione che accetti 
tre argomenti:
un array e due numeri 
(“a” più piccolo di “b” e “b” grande 
al massimo quanto il numero di 
elementi dell’array).
*/

// Dichiaro array come esempio
const arrayNumeri = [1, 2, 3, 4, 5, 6];

function cuttedArray(array, min, max) {

    // dichiaro array a cui mettere un intervallo
    const arrayNuovo = [];

    for (let i = min; i < max; i++) {
        arrayNuovo.push(array[i]);
    }

    return arrayNuovo;
    
}

console.log(cuttedArray(arrayNumeri, 0, 3));
