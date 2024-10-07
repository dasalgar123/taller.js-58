// script.js

function verificarEstado() {
    // Prompt the user to enter a number
    var input = prompt("Por favor, introduce un número:"); 
    var numeroinput = parseFloat(input); // Convertir a número
    let mensaje;

    if (isNaN(numeroinput)) {
        mensaje = "Por favor, introduce un número válido.";
    } else if (numeroinput > 0) {
        mensaje = "El número es positivo.";
    } else if (numeroinput < 0) {
        mensaje = "El número es negativo.";
    } else {
        mensaje = "El número es cero.";
    }

    alert("El número es: " + numeroinput + ". " + mensaje);
}

// Call the function to execute it
verificarEstado();
