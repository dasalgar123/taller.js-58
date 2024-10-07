function verificarAprobacion() {
    let calificacion = parseFloat(prompt("Ingrese su calificación:"));

    if (calificacion >= 60) {
        alert("¡Felicidades! Has aprobado el examen.");
    } else {
        alert("Lo siento, no has aprobado el examen.");
    }
}

verificarAprobacion();

