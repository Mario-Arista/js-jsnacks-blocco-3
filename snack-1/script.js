const richiesta = prompt("Inserisci una parola");

const output = document.getElementById("output").innerText = parolaAlContrario(richiesta);


function parolaAlContrario(stringa) {

    return stringa.split("").reverse().join("");;
}

