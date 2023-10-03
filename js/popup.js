// Obtener el modal y el botón para cerrarlo
var modal = document.getElementById("myModal");
var closeModal = document.getElementById("closeModal");

// Función para mostrar el modal
function mostrarModal() {
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Cambia el fondo a opaco
    modal.style.display = "block"; // Muestra el modal
}

// Verificar si el contador de visitas existe en localStorage
var contadorVisitas = localStorage.getItem("contadorVisitas");

// Si no existe, inicializarlo a 0
if (contadorVisitas === null) {
    contadorVisitas = 0;
}

// Incrementar el contador de visitas
contadorVisitas++;

// Si el contador de visitas alcanza un cierto número (por ejemplo, 3), mostrar el modal y reiniciar el contador
if (contadorVisitas >= 3) {
    mostrarModal();
    contadorVisitas = 0; // Reiniciar el contador
}

// Guardar el contador de visitas actualizado en localStorage
localStorage.setItem("contadorVisitas", contadorVisitas);

// Cerrar el modal al hacer clic en la "x" o fuera del modal
closeModal.onclick = function() {
    modal.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Cambia el fondo a transparente
    // Espera a que termine la transición antes de ocultar completamente el modal
    setTimeout(function() {
        modal.style.display = "none";
    }, 100); // Ajusta el valor al mismo que la duración de la transición (0.1 segundos)
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Cambia el fondo a transparente
        // Espera a que termine la transición antes de ocultar completamente el modal
        setTimeout(function() {
            modal.style.display = "none";
        }, 100); // Ajusta el valor al mismo que la duración de la transición (0.1 segundos)
    }
}
