document.getElementById("verBtn").addEventListener("click", function() {
    // Obtener el valor ingresado por el usuario
    const calificacion = parseFloat(document.getElementById("numero_input").value);
    let resultado = '';

    // Validar si la calificación es un número y está en el rango adecuado
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        resultado = "Por favor, ingrese una calificación válida entre 0 y 100.";
    } else {
        // Clasificar la calificación
        if (calificacion >= 90) {
            resultado = "A";
        } else if (calificacion >= 80) {
            resultado = "B";
        } else if (calificacion >= 70) {
            resultado = "C";
        } else if (calificacion >= 60) {
            resultado = "D";
        } else {
            resultado = "F";
        }
    }

    // Mostrar el resultado en el campo correspondiente
    document.getElementById("resultado").value = resultado;
});
