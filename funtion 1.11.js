// Función para generar la factura
function generarFactura() {
    // Pedir datos al usuario
    var nombreCliente = prompt("Ingrese el nombre del cliente:"); // Nombre del cliente
    var producto = prompt("Ingrese el nombre del producto:"); // Nombre del producto
    var cantidad = parseInt(prompt("Ingrese la cantidad de productos:"), 10); // Cantidad de productos
    var precioUnitario = parseFloat(prompt("Ingrese el precio unitario:")); // Precio unitario
    var esEstudiante = prompt("¿Es estudiante? (si/no):").toLowerCase() === 'si'; // Preguntar si es estudiante

    // Validar datos
    if (isNaN(cantidad) || isNaN(precioUnitario) || cantidad <= 0 || precioUnitario <= 0) {
        alert("La cantidad y el precio unitario deben ser números mayores a cero.");
        return; // Salir de la función si hay un error
    }

    // Calcular el subtotal
    var subtotal = cantidad * precioUnitario; // Calcular subtotal

    // Calcular el impuesto
    var impuesto = esEstudiante ? subtotal * 0.05 : subtotal * 0.13; // Calcular impuesto

    // Calcular el total
    var total = subtotal + impuesto; // Calcular total

    // Mostrar mensaje con los detalles de la factura
    var mensajeFactura = `
        Factura Generada:
        -------------------
        Nombre del Cliente: ${nombreCliente}
        Producto: ${producto}
        Cantidad: ${cantidad}
        Precio Unitario: $${precioUnitario.toFixed(2)}
        Subtotal: $${subtotal.toFixed(2)}
        Impuesto: $${impuesto.toFixed(2)}
        Total a Pagar: $${total.toFixed(2)}
    `;

    // Mostrar la factura en un alert
    alert(mensajeFactura);
}

// Llamar a la función
generarFactura(); // Ejecutar la función para generar la factura
