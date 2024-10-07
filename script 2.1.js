function calculateFromInputs() {
    let numero1 = parseFloat(document.getElementById('Numero_1_label').value);
    let numero2 = parseFloat(document.getElementById('Numero_2_label').value);
    let operacion = document.getElementById('product_type').value;

    let resultado;

    // Realiza la operación según el tipo seleccionado
    switch (operacion) {
        case 'A': // Suma
            resultado = numero1 + numero2;
            break;
        case 'V': // Resta
            resultado = numero1 - numero2;
            break;
        case 'E': // Multiplicación
            resultado = numero1 * numero2;
            break;
        case 'D': // División
            resultado = numero2 !== 0 ? (numero1 / numero2) : 'Error: División por cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostrar el resultado en un input correspondiente
    document.getElementById('opracion_resultado').value = resultado;
}