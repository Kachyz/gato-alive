// 1 - X    2 - O
let turnoPrimerJugador = true;
let copiaTablero = [];
let seguimosJugando = true;
let numeroDeJugadores = 2;

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
                document.getElementById("jugadorEnTurno").innerText = 2;
            }
            else {
                casilla.classList.add("casilla-azul");
                casilla.classList.remove("casilla-morada");
                casilla.childNodes[0].innerText = 'O';
                copiaTablero[numero-1] = 'O';
                turnoPrimerJugador = true;
                document.getElementById("jugadorEnTurno").innerText = 1;
            }

            //¿ALGUIEN GANÓ?
            if(revisarGanador()) {
                //BLOQUEAR TABLERO
                seguimosJugando = false;
                //MOSTRAR MENSAJE DE FELICIDADES
                document.getElementById('mensaje-ganador').style.display = 'inline-block'
            } else {
                // No hubo ganador, pasamos al siguiente jugador
                revisarEmpate()
                if(numeroDeJugadores === 1 ) {
                    // Estamos jugando contra CPU
                    if(!turnoPrimerJugador){
                        turnoCPU()
                    }
                }
            }
        }
    }
    //SALIR
}

function revisarEmpate() {
    // Revisar `copiaTablero` para saber si ya tiene marcadas las 9 casillas
    if (
        copiaTablero[0] &&
        copiaTablero[1] &&
        copiaTablero[2] &&
        copiaTablero[3] &&
        copiaTablero[4] &&
        copiaTablero[5] &&
        copiaTablero[6] &&
        copiaTablero[7] &&
        copiaTablero[8]
    ){
        seguimosJugando = false;
    }
}

function turnoCPU() {
    // Seleccionar un numero Random (aleatorio)
    // Multiplicarlos por 10
    // Redondearlo para evitar decimales
    // Relacionar ese número con casilla correspondiente
    // Revisar si la casilla NO está ocupada
        // Tomar decisión al respecto
    // Regresar a jugador 1

    let numAleatorio = Math.floor(Math.random() * 9) + 1;
    let casillaSeleccionada = document.getElementById('casilla' + numAleatorio)

    if(!estaOcupada(casillaSeleccionada)) {
        // La casilla está libre
        marcarCasilla(numAleatorio);
    } else {
       // La casilla seleccionada se encuentra ocupada
       turnoCPU()
    }

    // Este bloque hace lo mismo que el IF anterior
    // while(estaOcupada(casillaSeleccionada)) {
    //     numAleatorio = Math.floor(Math.random() * 9) + 1;
    //     casillaSeleccionada = document.getElementById('casilla' + numAleatorio)
    // }
    // marcarCasilla(numAleatorio)
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
    seguimosJugando = true;
    turnoPrimerJugador = true;
    document.getElementById('mensaje-ganador').style.display = 'none';
    document.getElementById("jugadorEnTurno").innerText = 1;
}

function limpiarCasilla(numero) {
    let casilla = document.getElementById("casilla" + numero);

    //vaciar casilla o texto vacío
    casilla.childNodes[0].innerText = "";

    //quitamos estilos
    casilla.classList.remove("casilla-morada");
    casilla.classList.remove("casilla-azul");
}

function cambiarModoDeJuego () {
    //CAMBIAR EL TEXTO DEL BOTÓN
    //CAMBIAR EL NUMERO DE JUGADORES
    //REINICIAR EL JUEGO

    if(numeroDeJugadores == 2) {
        document.getElementById("modoJuego").innerText = "VS PLAYER";
        numeroDeJugadores = 1;
        turnoPrimerJugador = true;
    } else {
        document.getElementById("modoJuego").innerText = "VS CPU";
        numeroDeJugadores = 2;
    }
    reiniciarJuego();
}