function verificarTemperatura() {
    let temperatura = parseFloat(prompt("Ingrese su temperatura:"));
    let umbral = 18.5;

    if (isNaN(temperatura)) {
        alert("Por favor, introduce una temperatura válida.");
        return false;
    }

    if (temperatura >= umbral) {
        alert("La temperatura es normal.");
        return true;  // Temperatura correcta
    } else {
        alert("La temperatura no es normal.");
        return false; // Temperatura incorrecta
    }
}

function verificarElevador() {
    var pesoUsuario = parseFloat(prompt("Ingrese el peso del usuario (kg):"));
    var pisoDeseado = parseInt(prompt("Ingrese el piso deseado:"));
    var limitePeso = 600; // Límite de peso en kg
    var pisoMinimo = 1;
    var pisoMaximo = 10;

    // Verificar si el peso y el piso son válidos
    if (isNaN(pesoUsuario) || isNaN(pisoDeseado)) {
        alert('Por favor, introduce valores válidos.');
        return false;
    }

    // Validar el peso
    if (pesoUsuario > limitePeso) {
        alert('Error: El ascensor está sobrecargado. Peso máximo permitido: ' + limitePeso + ' kg.');
        return false;
    } 
    // Validar el piso deseado
    else if (pisoDeseado >= pisoMinimo && pisoDeseado <= pisoMaximo) {
        alert('El ascensor se moverá al piso ' + pisoDeseado + '.');
        return true;  // Elevador correcto
    } 
    else {
        alert('Error: Piso no válido. Introduce un piso entre ' + pisoMinimo + ' y ' + pisoMaximo + '.');
        return false; // Piso incorrecto
    }
}

function validar() {
    let temperaturaValida = verificarTemperatura();
    let elevadorValido = verificarElevador();

    // Si ambas validaciones son correctas, se muestra el mensaje final
    if (temperaturaValida && elevadorValido) {
        alert("Ambas validaciones son correctas. El ascensor se moverá con una temperatura normal.");
    } else {
        alert("Una o ambas validaciones no son correctas.");
    }
}

// Ejecutar la validación general
validar();
