var pisoMinimo = 1; 
var pisoMaximo = 10; 
var pisoUsuario;
var pisoDeseado;
var mensaje;

pisoMinimo = 1; 
pisoMaximo = 10; 
pisoUsuario = prompt("Ingrese el piso al que desea ir (1-10):");
pisoDeseado = parseInt(pisoUsuario);

if (pisoDeseado >= pisoMinimo && pisoDeseado <= pisoMaximo) {
    mensaje=("El ascensor se mueve al piso " + pisoDeseado + ".");} 
else { mensaje=("Error: Piso no válido.");}
alert( mensaje)