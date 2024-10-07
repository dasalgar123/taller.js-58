// Variables para los descuentos y recargos
let descuentoA = 0; 
let descuentoV = 0.10; 
let recargoE = 0.20;

function calculate() {
    // Obtener valores de los inputs
    let precio = parseFloat(document.getElementById('precio_input').value);
    let cantidad = parseInt(document.getElementById('cantidad_input').value);
    let tipoProducto = document.getElementById('tipo_producto').value; // Usar el valor seleccionado

    // Inicializa la variable valorTotal en 0
    let valorTotal = 0;

    // Validar tipo de producto
    if (!tipoProducto) {
        alert('Seleccione un tipo de producto válido: A, V o E.');
        return; // Salir de la función si el tipo es inválido
    }

    // Calcular el valor total según el tipo de producto
    switch (tipoProducto) {
        case 'A':
            valorTotal = precio * cantidad * (1 - descuentoA);
            break;
        case 'V':
            valorTotal = precio * cantidad * (1 - descuentoV);
            break;
        case 'E':
            valorTotal = precio * cantidad * (1 + recargoE);
            break;
        default:
            alert('Tipo de producto no válido. Ingrese A, V o E.');
            return;
    }

    // Mostrar el resultado en el input correspondiente
    document.getElementById('valor_total').value = valorTotal.toFixed(2);
}
