/*
Scrivi una funzione che fonda 
due array presi come parametri
(date per scontato che abbiano lo stesso 
    numero di elementi) 
prendendo alternativamente gli elementi 
da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

// Dichiaro due array come esempio
const arrayLettere = ["a", "b", "c"];
const arrayNumeri = [1, 2, 3];


function fusionArray(array1, array2) {

    // dichiaro array unione
    const arrayUnione = [];

    for (let i = 0; i < array1.length; i++) {
        arrayUnione.push(array1[i], array2[i]);
    }

    return arrayUnione;
    
}

console.log(fusionArray(arrayLettere, arrayNumeri));

