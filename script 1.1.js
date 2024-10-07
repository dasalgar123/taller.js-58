// Primero, esperamos que el usuario haga clic en el botón con id "verBtn".
// Añadimos un "escuchador de eventos" para que cuando el botón sea presionado, se ejecute la función 'verificarParImpar'.
document.getElementById("verBtn").addEventListener("click", verificarParImpar);
// Esta es la función principal que se ejecutará cuando el botón sea presionado.
function verificarParImpar() {
    
    // 1. Capturamos el valor que el usuario ingresó en el campo de texto con id "numeroInput".
    //    Usamos parseFloat para convertir el valor a un número decimal (por si el usuario ingresa un número con decimales).
    var numero = parseFloat(document.getElementById("numeroInput").value);

    // 2. Inicializamos una variable llamada 'mensaje', que más adelante usaremos para almacenar si el número es "Par" o "Impar".
    var mensaje;

    // 3. Comprobamos si el valor ingresado es un número válido usando isNaN().
    //    Si el valor no es un número (por ejemplo, si el usuario deja el campo vacío o ingresa texto), asignamos un mensaje de "Número no válido".
    if (isNaN(numero)) {
        mensaje = "Número no válido";

    // 4. Si el número es válido, comprobamos si es par o impar usando el operador módulo (%).
    //    Si el número dividido por 2 da como resultado 0, es un número par.
    } else if (numero % 2 === 0) {
        mensaje = "Par"; // Si la condición es verdadera, el número es "Par".

    // 5. Si el número no es par, entonces es impar, así que asignamos "Impar" a la variable mensaje.
    } else {
        mensaje = "Impar";
    }

    // 6. Finalmente, mostramos el resultado en el campo de texto con id "resultado".
    //    Este es un campo de solo lectura, por lo que no puede ser modificado manualmente, solo por código.
    document.getElementById("resultado").value = mensaje;
}

