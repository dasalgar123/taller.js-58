// Límite de peso permitido en el ascensor
var limitePeso = 200; // Peso máximo permitido en kilogramos

// Función para simular el ascensor
function simularAscensor() {
    // Solicitar el peso del usuario
    var pesoUsuario = parseFloat(prompt("Introduce tu peso en kilogramos:"));
    // Solicitar el piso deseado
    var pisoDeseado = parseInt(prompt("Introduce el piso al que deseas ir (1-10):"));

    // Definir el rango de pisos válidos
    var pisoMinimo = 1;
    var pisoMaximo = 10;

    // Verificar si el peso y el piso son válidos
    if (isNaN(pesoUsuario) || isNaN(pisoDeseado)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    if (pesoUsuario > limitePeso) {
        alert('Error: El ascensor está sobrecargado. Peso máximo permitido: ' + limitePeso + ' kg.');
    } else if (pisoDeseado >= pisoMinimo && pisoDeseado <= pisoMaximo) {
        alert('El ascensor se moverá al piso ' + pisoDeseado + '.'); // Mensaje de éxito
    } else {
        alert('Error: Piso no válido. Introduce un piso entre ' + pisoMinimo + ' y ' + pisoMaximo + '.'); // Mensaje de error
    }
}

// Llamar a la función para ejecutar la simulación
simularAscensor();

