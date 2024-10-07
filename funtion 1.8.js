var peso = parseFloat(prompt("Introduce tu peso en kilogramos:"));
var altura = parseFloat(prompt("Introduce tu altura en metros:"));
var imc = peso / (altura * altura);
var mensaje;
if (imc < 18.5) {
    mensaje = "Bajo peso";
} else if (imc < 25) {
    mensaje = "Peso normal";
} else if (imc < 30) {
    mensaje = "Sobrepeso";
} else {
    mensaje = "Obesidad";
}
alert("Tu IMC es: " + imc.toFixed(2) + ". " + mensaje);
