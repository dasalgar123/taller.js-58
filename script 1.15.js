// Definir el umbral de alerta
var umbralAlerta = 30; // Cambia este valor según sea necesario

// Manejar el evento de clic en el botón
document.getElementById('verBtn').addEventListener('click', function() {
    // Obtener la temperatura ingresada por el usuario
    var temperatura = parseFloat(document.getElementById('temperaturaInput').value);
    
    // Verificar si la temperatura es un número válido
    if (isNaN(temperatura)) {
        document.getElementById('resultado').value = 'Por favor, ingresa un número válido.';
        return;
    }
    
    // Verificar la temperatura y generar el resultado
    var resultado;
    if (temperatura > umbralAlerta) {
        resultado = '¡Alerta! La temperatura es demasiado alta.';
    } else {
        resultado = 'La temperatura es normal.';
    }
    
    // Mostrar el resultado en el cuadro correspondiente
    document.getElementById('resultado').value = resultado;
});
