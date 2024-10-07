var montoCompra = parseFloat(prompt("Introduce el monto total de la compra:"));
var descuento = 0;

if (montoCompra >= 1000) {
    descuento = montoCompra * 0.10;
} else if (montoCompra >= 500) {
    descuento = montoCompra * 0.05;
}
var montoTotal = montoCompra - descuento;
alert("Monto de compra: $" + montoCompra.toFixed(2) + "\nDescuento aplicado: $" + descuento.toFixed(2) + "\nMonto total a pagar: $" + montoTotal.toFixed(2));
