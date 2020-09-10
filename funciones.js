// 1 - X    2 - O
let turnoPrimerJugador = true

function marcarCasilla(numero) {
    let casilla = document.getElementById("casilla" + numero);

    //LA CASILLA ESTÁ OCUPADA???
    let ocupada = estaOcupada(casilla)

    if(!ocupada) {
        // Preguntamos de quien es el turno
    if(turnoPrimerJugador) {
        casilla.classList.add("casilla-morada");
        casilla.classList.remove("casilla-azul")
        casilla.childNodes[0].innerText = 'X';
        turnoPrimerJugador = false;
    }
    else {
        casilla.classList.add("casilla-azul");
        casilla.classList.remove("casilla-morada");
        casilla.childNodes[0].innerText = 'O';
        turnoPrimerJugador = true;
    }
    }
    //SALIR
}

function estaOcupada(casilla){
    
    if(casilla.childNodes[0].innerText) {
        console.log('sí está ocupada');
        return true;
    } else {
        console.log('no está ocupada');
        return false;
    }
}

function reiniciarJuego () {
    limpiarCasilla(1);
    limpiarCasilla(2);
    limpiarCasilla(3);
    limpiarCasilla(4);
    limpiarCasilla(5);
    limpiarCasilla(6);
    limpiarCasilla(7);
    limpiarCasilla(8);
    limpiarCasilla(9);
    // window.location.reload();
}

function limpiarCasilla(numero) {
    let casilla = document.getElementById("casilla" + numero);

    //vaciar casilla o texto vacío
    casilla.childNodes[0].innerText = "";

    //quitamos estilos
    casilla.classList.remove("casilla-morada");
    casilla.classList.remove("casilla-azul");
}