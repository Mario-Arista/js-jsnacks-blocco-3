/*
Scrivi una funzione che accetti 
una stringa come parametro e restituisca 
la stessa stringa ma con le iniziali 
delle parole tutte in maiuscolo
*/

const phrase = "uomo che usciva la gente";

function capitalWords(string) {

  // Divido la stringa in un array di parole
  let words = string.split(" ");
  console.log(words);

  // Creo array per memorizzare le parole con la prima lettera maiuscola
  let FirstLetterCapitalWords = [];

  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");

    letters[0] = letters[0].toUpperCase();

    let capitallizedword = letters.join("");

    FirstLetterCapitalWords.push(capitallizedword);

  }

  console.log(FirstLetterCapitalWords);

  return FirstLetterCapitalWords;

}

const output = document.getElementById("output").innerText = capitalWords(phrase);
