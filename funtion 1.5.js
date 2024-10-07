var num_1 = 0;
var num_2 = 0;
var respuesta;

num_1 = prompt("Por favor, digite el primer número:");
alert("Digitaste el número es : " + num_1);
num_2 = prompt("Por favor, digite el segundo número:");
alert("Digitaste el número es : " + num_2);

if (parseFloat(num_1) <= parseFloat(num_2)) {
    respuesta = "El primer número que digitaste, es; " + num_1 + ", es menor o igual que el segundo número, es;" + num_2 + ".";
} else {
    respuesta = "El primer número que digitaste, es:" + num_1 + ", es mayor que el segundo número, es:" + num_2 + ".";
}
alert(respuesta);
