document.getElementById("verBtn").addEventListener("click", evaluarCalificacion);

function evaluarCalificacion() {
    var calificacion = parseFloat(document.getElementById("calificacion_input").value);
    var mensaje;
    
    if (isNaN(calificacion)) {
        mensaje = "Número no válido";
    } else if (calificacion >= 60) {
        mensaje = "Aprobado";
    } else {
        mensaje = "Reprobado";
    }

    // Mostrar el mensaje en el input estado_output
    document.getElementById("resultado").value = mensaje;
}

