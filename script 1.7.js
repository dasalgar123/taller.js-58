document.getElementById('verBtn').addEventListener('click', function() {
    // Obtener los números ingresados
    var numero1 = parseInt(document.getElementById('numero_input').value);
    var numero2 = parseInt(document.getElementById('numero_input_2').value);
    var numero3 = parseInt(document.getElementById('numero_input_3').value);

    // Calcular el promedio
    var promedio = (numero1 + numero2 + numero3) / 3;

    // Mostrar el promedio en el campo correspondiente
    document.getElementById('promedio_resultado').value = promedio.toFixed(2);

    // Mostrar true o false según el promedio
    if (promedio > 5) {
        alert("El promedio es mayor a 5: true");
    } else {
        alert("El promedio es menor o igual a 5: false");
    }
});