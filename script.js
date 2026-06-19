const boton = document.getElementById("btnSaludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    const fecha = new Date();

    mensaje.textContent =
        `¡Hola! El JavaScript funciona correctamente. Hora actual: ${fecha.toLocaleTimeString()}`;
});