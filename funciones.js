// 1 - X    2 - O
let turnoPrimerJugador = true

function marcarCasilla () {
    let casilla = document.getElementById("casilla1");

    // Preguntamos de quien es el turno
    if(turnoPrimerJugador) {
        casilla.classList.add("casilla-morada");
        casilla.classList.remove("casilla-azul")
        casilla.childNodes[0].innerText = 'X';
        turnoPrimerJugador = false
    }
    else {
        casilla.classList.add("casilla-azul");
        casilla.classList.remove("casilla-morada");
        casilla.childNodes[0].innerText = 'O';
        turnoPrimerJugador = true
    }
}
