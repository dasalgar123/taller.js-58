document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener peso y altura
    var peso = parseFloat(document.getElementById('peso_input').value);
    var altura = parseFloat(document.getElementById('altura_input').value);

    // Verificar si los campos tienen valores válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    }

    // Calcular el IMC
    var imc = peso / (altura * altura);
    var mensaje = "";

    // Determinar el rango de IMC
    if (imc < 18.5) {
        mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        mensaje = "Sobrepeso";
    } else {
        mensaje = "Obesidad";
    }

    // Mostrar el IMC y el mensaje
    document.getElementById('resultado').value = `IMC: ${imc.toFixed(2)} - ${mensaje}`;
});