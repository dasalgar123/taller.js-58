function calcularTotal() {
    // Solicita el precio del producto y la cantidad comprada al usuario
    const precio = parseFloat(prompt("Introduce el precio del producto:"));
    const cantidad = parseInt(prompt("Introduce la cantidad comprada:"));

    // Inicializa las variables para el precio total y el descuento
    let total = precio * cantidad;
    let descuento = 0;

    // Aplica los descuentos según la cantidad comprada
    if (cantidad >= 10) {
        descuento = total * 0.10; // 10% de descuento
    } else if (cantidad >= 5) {
        descuento = total * 0.05; // 5% de descuento
    }

    // Calcula el total con descuento si aplica
    total -= descuento;

    // Muestra el resultado al usuario
    alert(`Precio total con descuento: ${total.toFixed(2)}`);
}

// Ejecuta la función para calcular el total
calcularTotal();
