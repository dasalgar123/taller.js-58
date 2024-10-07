// Función que pide los números y la operación por prompt
function calculateFromPrompt() {
    // Pedir al usuario que ingrese los números y la operación
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = parseInt(prompt("Ingrese la operación (1: Suma, 2: Resta, 3: Multiplicación, 4: División):"));

    // Inicializa el resultado
    let resultado;

    // Realiza la operación según el tipo seleccionado
    switch (operacion) {
        case 1: // Suma
            resultado = numero1 + numero2;
            break;
        case 2: // Resta
            resultado = numero1 - numero2;
            break;
        case 3: // Multiplicación
            resultado = numero1 * numero2;
            break;
        case 4: // División
            resultado = numero2 !== 0 ? (numero1 / numero2) : 'Error: División por cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostrar el resultado en un alert
    alert('Resultado de la operación: ' + resultado);
}

// Llama a las funciones según lo que necesites
// Puedes descomentar una de las siguientes líneas para ejecutarla
// calculateFromInputs(); // Llama esta función para usar inputs de HTML
// calculateFromPrompt(); // Llama esta función para usar prompt
alculateTotal();
