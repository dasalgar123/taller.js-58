// Función para verificar si el estudiante ha aprobado
function verificarAprobacion() {
    // Solicitar al usuario que ingrese su calificación
    let calificacion = parseFloat(prompt("Ingrese su calificación:"));

    // Verificar si la calificación es suficiente para aprobar
    if (calificacion >= 60) {
        alert("¡Felicidades! Has aprobado el examen.");
    } else {
        alert("Lo siento, no has aprobado el examen.");
    }
}

// Llamar a la función
verificarAprobacion();
