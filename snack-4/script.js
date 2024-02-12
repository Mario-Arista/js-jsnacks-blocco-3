/*
Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
*/

// Dichiaro array come esempio
const parola = prompt("Scrivi una parola");

function orderedArray(stringa) {

    return stringa.split("").sort().join("");
    
}

const output = document.getElementById("output").innerText = orderedArray(parola);