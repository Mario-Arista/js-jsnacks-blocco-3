/*
Scrivi una funzione che accetti 
una stringa come parametro e restituisca 
la stessa stringa ma con le iniziali 
delle parole tutte in maiuscolo
*/

const phrase = `uomo che usciva la gente`;

  function capitalWords(string) {

    // Divido la stringa in un array di parole
    let words = string.split(' ');
    console.log(words);

}

  
  const output = document.getElementById("output").innerText = capitalWords(phrase);
