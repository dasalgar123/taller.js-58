document.getElementById('verBtn').addEventListener('click', function() {
    // Obtener la cantidad que tiene Juan
    var cantidadJuan = parseFloat(document.getElementById('numero_input').value);

    // Calcular lo que tienen David y José
    var cantidadDavid = cantidadJuan / 2;
    var cantidadJose = (cantidadJuan + cantidadDavid) / 2;

    // Mostrar los resultados
    document.getElementById('resultado_juan').value = cantidadJuan.toFixed(2);
    document.getElementById('resultado_david').value = cantidadDavid.toFixed(2);
    document.getElementById('resultado_jose').value = cantidadJose.toFixed(2);

    // Calcular el promedio
    var promedio = (cantidadJuan + cantidadDavid + cantidadJose) / 3;
    alert("El promedio de la cantidad de dinero que tienen entre los tres es: " + promedio.toFixed(2));
});