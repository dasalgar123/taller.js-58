var limitePeso = 200; // Peso máximo permitido en kilogramos

document.getElementById('verBtn').addEventListener('click', function() {
    var pesoUsuario = parseFloat(document.getElementById('pesoInput').value);
    var pisoDeseado = parseInt(document.getElementById('numeroInput').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(pesoUsuario) || isNaN(pisoDeseado)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    if (pesoUsuario > limitePeso) {
        resultado.value = 'Error: El ascensor está sobrecargado. Peso máximo permitido: ' + limitePeso + ' kg.';
    } else if (pisoDeseado >= 1 && pisoDeseado <= 10) {
        resultado.value = 'El ascensor se moverá al piso ' + pisoDeseado + '.';
    } else {
        resultado.value = 'Error: Piso no válido. Introduce un piso entre 1 y 10.';
    }
});
