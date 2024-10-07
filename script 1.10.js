function generarFactura() {
    // Obtener los valores del formulario usando IDs
    const producto = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Calcular el total
    const total = precio * cantidad;

    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("resultadoNombre").innerText = producto;
    document.getElementById("resultadoPrecio").innerText = precio.toFixed(2);
    document.getElementById("resultadoCantidad").innerText = cantidad;
    document.getElementById("resultadoTotal").innerText = total.toFixed(2);
}

