// Rango de temperatura aceptable
var temperaturaMinima = 18; // Temperatura mínima aceptable
var temperaturaMaxima = 25; // Temperatura máxima aceptable

document.getElementById('verBtn').addEventListener('click', function() {
    // Obtener el valor de temperatura ingresado por el usuario
    var temperaturaUsuario = parseFloat(document.getElementById('temperaturaInput').value);
    var resultado = document.getElementById('resultado');

    // Verificar que el valor ingresado es válido
    if (isNaN(temperaturaUsuario)) {
        alert('Por favor, introduce una temperatura válida.');
        return;
    }

    // Verificar si la temperatura está dentro del rango aceptable
    if (temperaturaUsuario >= temperaturaMinima && temperaturaUsuario <= temperaturaMaxima) {
        resultado.value = 'La temperatura es adecuada. (' + temperaturaUsuario + '°C)';
    } else {
        resultado.value = 'La temperatura está fuera del rango deseado. (' + temperaturaUsuario + '°C)';
    }
});

function verificarAprobacion() {
    let calificacion = parseFloat(prompt("Ingrese su calificación:"));

    if (calificacion >= 60) {
        alert("¡Felicidades! Has aprobado el examen.");
    } else {
        alert("Lo siento, no has aprobado el examen.");
    }
}

verificarAprobacion();

