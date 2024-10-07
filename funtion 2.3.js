var calificacion = parseFloat(prompt("Introduce la calificación del examen:"));
var mensaje;

if (calificacion >= 60) {
    mensaje = "Aprobado";
} else {
    mensaje = "Reprobado";
}

alert("Tu calificación es: " + calificacion + ". " + mensaje);


