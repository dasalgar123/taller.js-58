
function verificartemperatura () {
    let temperatura = parseFloat(prompt("Ingrese su temperatura :"));
    let umbral= 18.5;

    if (temperatura >= umbral) {
        alert("temperatura es normal..");
    } else {
        alert("no es la temperatura es normal..");
    }
}

verificartemperatura ();

