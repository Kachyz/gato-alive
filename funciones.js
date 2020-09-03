
function marcarCasilla () {
    let casilla = document.getElementById("casilla1");
    casilla.classList.add("casilla-morada");
    casilla.childNodes[0].innerText = 'X';
}