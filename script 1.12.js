  // Obtener elementos del DOM
  const verBtn = document.getElementById('verBtn');
  const numeroInput = document.getElementById('numeroInput');
  const resultado = document.getElementById('resultado');

  // Función para verificar el piso
  verBtn.addEventListener('click', () => {
      const piso = parseInt(numeroInput.value); // Convertir a número entero
      
      // Definir el rango de pisos válidos
      const pisoMinimo = 1;
      const pisoMaximo = 10;

      // Verificar si el piso está dentro del rango válido
      if (piso >= pisoMinimo && piso <= pisoMaximo) {
          resultado.value = `El ascensor se moverá al piso ${piso}.`; // Mensaje de éxito
      } else {
          resultado.value = 'Error: Piso no válido. Introduce un piso entre 1 y 10.'; // Mensaje de error
      }
  });