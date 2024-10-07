document.getElementById('verBtn').addEventListener('click', function() {
    var num_1 = parseFloat(document.getElementById('numero_input').value);
    var num_2 = parseFloat(document.getElementById('numero_input_2').value);
    var mayor, menor;

    if (num_1 > num_2) {
        mayor = num_1;
        menor = num_2;
    } else {
        mayor = num_2;
        menor = num_1;
    }

    document.getElementById('mayor_resultado').value = mayor;
    document.getElementById('menor_resultado').value = menor;
});