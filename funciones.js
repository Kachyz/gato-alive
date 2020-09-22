// 1 - X    2 - O
let turnoPrimerJugador = true;
let copiaTablero = [];
let seguimosJugando = true;

function marcarCasilla(numero) {
    let casilla = document.getElementById("casilla" + numero);

    //LA CASILLA ESTÁ OCUPADA???
    let ocupada = estaOcupada(casilla);

    // if(seguimosJugando && !ocupada) {
    if(seguimosJugando) {
        if(!ocupada) {
            // Preguntamos de quien es el turno
            if(turnoPrimerJugador) {
                casilla.classList.add("casilla-morada");
                casilla.classList.remove("casilla-azul");
                casilla.childNodes[0].innerText = 'X';
                // colocar la misma X pero en el arreglo
                copiaTablero[numero-1] = 'X';
                turnoPrimerJugador = false;
            }
            else {
                casilla.classList.add("casilla-azul");
                casilla.classList.remove("casilla-morada");
                casilla.childNodes[0].innerText = 'O';
                copiaTablero[numero-1] = 'O';
                turnoPrimerJugador = true;
            }

            //¿ALGUIEN GANÓ?
            if(revisarGanador()) {
                console.log('YA HAY UN GANADOR')
                //BLOQUEAR TABLERO
                seguimosJugando = false;
                //MOSTRAR MENSAJE DE FELICIDADES
            }

        }
    }
    //SALIR
}

function revisarGanador() {

    //VERTICALES 
    //OPC 1 -> 0, 3, 6
    //OPC 2 -> 1, 4, 7
    //OPC 3 -> 2, 5, 8
    if(
        (copiaTablero[0] && copiaTablero[0] ==  copiaTablero[3] && copiaTablero[0] == copiaTablero[6]) || 
        (copiaTablero[1] && copiaTablero[1] == copiaTablero[4] && copiaTablero[1] == copiaTablero[7]) ||
        (copiaTablero[2] && copiaTablero[2] == copiaTablero[5] && copiaTablero[2] == copiaTablero[8])
        ) {
        return true;
    }

    //HORIZONTALES
    //OPC 1 -> 0, 1, 2
    //OPC 2 -> 3, 4, 5
    //OPC 3 -> 6, 7, 8

    if(
        (copiaTablero[0] && copiaTablero[0] ==  copiaTablero[1] && copiaTablero[0] == copiaTablero[2]) ||
        (copiaTablero[3] && copiaTablero[3] ==  copiaTablero[4] && copiaTablero[3] == copiaTablero[5]) ||
        (copiaTablero[6] && copiaTablero[6] ==  copiaTablero[7] && copiaTablero[6] == copiaTablero[8])
    ) {
        return true;
    }

    //DIAGONALES
    //OPC 1 -> 0, 4, 8
    //OPC 2 -> 2, 4, 6

    if(
        (copiaTablero[0] && copiaTablero[0] == copiaTablero[4] && copiaTablero[0] == copiaTablero[8]) ||
        (copiaTablero[2] && copiaTablero[2] == copiaTablero[4] && copiaTablero[2] == copiaTablero[6])
    ) {
        return true;
    }

    return false;
}

function estaOcupada(casilla){

    if(casilla.childNodes[0].innerText) {
        return true;
    } else {
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
    copiaTablero = [];
}

function limpiarCasilla(numero) {
    let casilla = document.getElementById("casilla" + numero);

    //vaciar casilla o texto vacío
    casilla.childNodes[0].innerText = "";

    //quitamos estilos
    casilla.classList.remove("casilla-morada");
    casilla.classList.remove("casilla-azul");
}