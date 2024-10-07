document.getElementById("verBtn").addEventListener("click", function() {
    // Obtener el precio del producto y la cantidad comprada desde los inputs
    const precio = parseFloat(document.getElementById("numero_input").value);
    const cantidad = parseInt(document.getElementById("numero_input_2").value);
    
    let totalCompra = 0;
    let descuento = 0;
    let totalFinal = 0;

    // Verificar que los valores ingresados sean válidos
    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert("Por favor ingrese un valor válido para el precio y la cantidad.");
    } else {
        // Calcular el valor total de la compra sin descuentos
        totalCompra = precio * cantidad;
        
        // Aplicar el descuento según la cantidad comprada
        if (cantidad >= 10) {
            descuento = totalCompra * 0.10;  // 10% de descuento
        } else if (cantidad >= 5 && cantidad < 10) {
            descuento = totalCompra * 0.05;  // 5% de descuento
        } else {
            descuento = 0;  // Sin descuento
        }

        // Calcular el total final a pagar después del descuento
        totalFinal = totalCompra - descuento;

        // Mostrar los valores en los campos de resultado
        document.getElementById("valor_compra").value = totalCompra.toFixed(2);
        document.getElementById("valor_descuento").value = descuento.toFixed(2);
        document.getElementById("valor_total").value = totalFinal.toFixed(2);
    }
});
