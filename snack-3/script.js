// Dichiaro array come esempio
const arrayNumbers = [1, 2, 3, 4, 5, 6];

function cuttedArray(array, min, max) {

    // dichiaro array a cui mettere un intervallo
    const arrayNew = [];

    for (let i = min; i < max; i++) {
        arrayNew.push(array[i]);
    }

    return arrayNew;
    
}

// Stampo array originale
const outputOriginal = document.getElementById("output-origin").innerText = (arrayNumbers).join(" ");

// Stampo array con intervallo
const output = document.getElementById("output").innerText = ((cuttedArray(arrayNumbers, 0, 3)).join(" "));
