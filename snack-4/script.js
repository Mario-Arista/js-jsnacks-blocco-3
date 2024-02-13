// Dichiaro array come esempio
const word = prompt("Scrivi una parola");

function orderedArray(string) {

    return string.split("").sort().join("");
    
}

const output = document.getElementById("output").innerText = orderedArray(word);