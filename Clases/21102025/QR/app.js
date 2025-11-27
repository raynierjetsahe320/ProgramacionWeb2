// Ejecutar cuando el documento esté listo
window.addEventListener("DOMContentLoaded", () => {

    const botonQR = document.querySelector("#makeQR");
    const cuadroQR = document.querySelector("#zoneQR");

    botonQR.addEventListener("click", () => {

        // Obtener valores del formulario
        const n = document.querySelector("#campoNombre").value.trim();
        const c = document.querySelector("#campoCorreo").value.trim();
        const i = document.querySelector("#campoInst").value.trim();
        const d = document.querySelector("#campoDep").value.trim();

        // Revisar que ningún campo esté vacío
        if ([n, c, i, d].some(v => v === "")) {
            alert("Rellena todos los datos antes de generar tu código.");
            return;
        }

        // Evitar crear un segundo código QR
        if (cuadroQR.children.length > 0) {
            alert("Ya se generó un código. No puedes crear otro.");
            return;
        }

        // Texto que codificará el QR
        const contenido =
            `Nombre: ${n}\nCorreo: ${c}\nInstitución: ${i}\nDependencia: ${d}`;

        // URL del QR (API pública)
        const direccion =
            "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
            encodeURIComponent(contenido);

        // Crear y mostrar IMG del QR
        const imagenQR = new Image();
        imagenQR.src = direccion;
        imagenQR.alt = "Código QR generado";
        imagenQR.classList.add("figQR");

        cuadroQR.appendChild(imagenQR);

        // Bloquear el botón
        botonQR.disabled = true;
        botonQR.textContent = "QR listo ✔";
    });
});
