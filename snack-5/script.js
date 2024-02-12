/*
Scrivi una funzione che accetti 
una stringa come parametro e restituisca 
la stessa stringa ma con le iniziali 
delle parole tutte in maiuscolo
*/

const phrase = prompt("Inserisci frase");

function capitalWords(string) {

  // Divido la stringa in un array di parole
  let words = string.split(" ");
  console.log(words);

  // Creo array per memorizzare le parole con la prima lettera maiuscola
  let FirstLetterCapitalWords = [];

  for (let i = 0; i < words.length; i++) {
    // Divido ogni parola in array di lettere
    let letters = words[i].split("");
    // Rendo maiuscola la prima lettera
    letters[0] = letters[0].toUpperCase();
    // Unisco parola con prima lettera maiusc
    let capitallizedword = letters.join("");
    // Unisco parola all'array
    FirstLetterCapitalWords.push(capitallizedword);

  }

  console.log(FirstLetterCapitalWords);

  return FirstLetterCapitalWords.join(" ");

}

const output = document.getElementById("output").innerText = capitalWords(phrase);

