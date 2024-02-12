// Metto prompt per parola
const richiesta = prompt("Inserisci una parola");

// Rendo visibile elemento in pagina
document.getElementById("hidden").classList.remove("d-none");

// Stampo ouput in pagina
const output = document.getElementById("output").innerText = parolaAlContrario(richiesta);


function parolaAlContrario(stringa) {

    return stringa.split("").reverse().join("");;
}

