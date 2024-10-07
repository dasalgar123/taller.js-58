function calcularFactura() {
    // Obtener los valores de los campos del formulario
    const nombreCliente = document.getElementById('nombreCliente').value;
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
    const esEstudiante = document.getElementById('esEstudiante').checked;
    const tipoCliente = document.getElementById('tipoCliente').value;

    // Calcular el subtotal
    const subtotal = cantidad * precioUnitario;

    // Calcular el impuesto
    const impuesto = esEstudiante ? subtotal * 0.05 : subtotal * 0.13;

    // Calcular el total
    const total = subtotal + impuesto;

    // Mostrar los resultados en el div correspondiente
    document.getElementById('resultadoNombre').textContent = producto;
    document.getElementById('resultadoPrecio').textContent = precioUnitario.toFixed(2);
    document.getElementById('resultadoCantidad').textContent = cantidad;
    document.getElementById('resultadoTotal').textContent = total.toFixed(2);
}
