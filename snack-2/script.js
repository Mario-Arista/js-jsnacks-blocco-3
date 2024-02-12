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


// Rendo visibile elemento in pagina
document.getElementById("hidden").classList.remove("d-none");

// Stampo array originari in pagina
const outputArrayOne = document.getElementById("output-array1").innerText = ((arrayLettere).join(" "));
const outputArrayTwo = document.getElementById("output-array2").innerText = ((arrayNumeri).join(" "));


// Stampo array riordinato in pagina
const output = document.getElementById("output").innerText = (fusionArray(arrayLettere, arrayNumeri).join(" "));

