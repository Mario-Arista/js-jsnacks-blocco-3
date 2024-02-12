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

// Stampo array originale
const outputOriginal = document.getElementById("output-origin").innerText = (arrayNumeri).join(" ");

// Stampo array con intervallo
const output = document.getElementById("output").innerText = ((cuttedArray(arrayNumeri, 0, 3)).join(" "));
