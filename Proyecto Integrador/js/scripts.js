document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;

            document.getElementById("resultado").textContent = `¡Gracias por tu mensaje, ${nombre}!`;

            console.log("Formulario enviado por: " + nombre);
        });
    }
});