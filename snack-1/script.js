const output = document.getElementById("output").innerText = parolaAlContrario("bella");


function parolaAlContrario(stringa) {

    return stringa.split("").reverse().join("");;
}

