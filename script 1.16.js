function crearVariables() {
    var temperature = parseFloat(document.getElementById('temperature_input').value);
    var minTemp = 10;
    var maxTemp = 30;
    var mensaje = '';
    return { temperature, minTemp, maxTemp };
}

function mostrarMensaje(mensaje) {
    var response = document.getElementById('response');
    response.value = mensaje;
}

function moveElevator() {
    var { temperature, minTemp, maxTemp } = crearVariables();

    if (isNaN(temperature)) {
        mostrarMensaje('Por favor, ingrese una temperatura válida.');
    } else if (temperature > maxTemp) {
        mostrarMensaje('¡Alerta! La temperatura está por encima del umbral de alerta.');
    } else if (temperature < minTemp) {
        mostrarMensaje('La temperatura está por debajo del umbral mínimo.');
    } else {
        mostrarMensaje('La temperatura es normal.');
    }
}



