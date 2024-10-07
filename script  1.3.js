document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verBtn").addEventListener("click", function() {
        const calificacion = parseInt(document.getElementById("numero_input").value); // Obtiene el valor de entrada
        let resultado; // Variable para almacenar el resultado

        // Clasificación de la calificación
        if (calificacion >= 90 && calificacion <= 100) {
            resultado = "A";
        } else if (calificacion >= 80) {
            resultado = "B";
        } else if (calificacion >= 70) {
            resultado = "C";
        } else if (calificacion >= 60) {
            resultado = "D";
        } else if (calificacion >= 0) {
            resultado = "F";
        } else {
            resultado = "Calificación no válida"; // Maneja calificaciones no válidas
        }

        // Muestra el resultado en el input
        document.getElementById("resultado").value = resultado; // Muestra el resultado en el campo correspondiente
    });
});
