function clasificarEdad() {
    const edad = document.getElementById("edad").value;
    const resultado = document.getElementById("resultado");
    let mensaje;

    if (edad === "") {
        mensaje = "Por favor, ingresa tu edad.";
    } else {
        const edadNum = parseInt(edad, 10);

        if (edadNum >= 0 && edadNum <= 12) {
            mensaje = "Eres un niño.";
        } else if (edadNum >= 13 && edadNum <= 17) {
            mensaje = "Eres un adolescente.";
        } else if (edadNum >= 18 && edadNum <= 64) {
            mensaje = "Eres un adulto.";
        } else if (edadNum >= 65) {
            mensaje = "Eres un adulto mayor.";
        } else {
            mensaje = "Edad no válida.";
        }
    }

    resultado.textContent = mensaje;
}
