// Solicitar tres números enteros al usuario
var num1 = parseInt(prompt("Introduce el primer número (1-10):"));
var num2 = parseInt(prompt("Introduce el segundo número (1-10):"));
var num3 = parseInt(prompt("Introduce el tercer número (1-10):"));

// Calcular el promedio de los tres números
var promedio = (num1 + num2 + num3) / 3;

// Determinar si el promedio es mayor a 5
var resultado = promedio > 5;

// Mostrar el resultado
alert("El promedio de los tres números es: " + promedio.toFixed(2) + ". Resultado: " + resultado);
