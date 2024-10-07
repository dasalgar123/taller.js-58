function cargarFrame(selectId, value) {
    const frame = document.getElementById('resultado');
    if (value) {
        frame.src = value; // Carga el HTML correspondiente en el iframe
    } else {
        frame.src = ""; // Limpia el iframe si no se selecciona nada
    }
}