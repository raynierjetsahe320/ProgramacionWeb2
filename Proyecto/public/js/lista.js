let filaEditando = null;

// EDITAR
function editarFila(id) {

    if (filaEditando && filaEditando.dataset.id != id) {
        return alert("Primero guarda o cancela la edición actual.");
    }

    const fila = document.querySelector(`tr[data-id='${id}']`);
    filaEditando = fila;

    const celdas = fila.querySelectorAll(".campo");

    // Guardar valores originales
    fila.dataset.original = JSON.stringify(
        Array.from(celdas).map(td => td.textContent.trim())
    );

    // Convertir a inputs
    celdas.forEach(td => {
        td.innerHTML = `<input class="form-control form-control-sm" value="${td.textContent.trim()}">`;
    });

    fila.querySelector(".acciones").innerHTML = `
        <button class="btn btn-success btn-sm" onclick="guardarFila(${id})">Guardar</button>
        <button class="btn btn-secondary btn-sm" onclick="cancelarEdicion()">Cancelar</button>
    `;
}

// CANCELAR
function cancelarEdicion() {

    if (!filaEditando) return;

    const valores = JSON.parse(filaEditando.dataset.original);
    const celdas = filaEditando.querySelectorAll(".campo");

    celdas.forEach((td, i) => {
        td.textContent = valores[i];
    });

    const id = filaEditando.dataset.id;

    filaEditando.querySelector(".acciones").innerHTML = `
        <button class="btn btn-editar btn-sm" onclick="editarFila(${id})">Editar</button>
        <button class="btn btn-eliminar btn-sm" onclick="eliminarFila(${id})">Eliminar</button>
    `;

    filaEditando = null;
}

// GUARDAR
function guardarFila(id) {

    const inputs = filaEditando.querySelectorAll("input");

    const datos = {
        id: parseInt(inputs[0].value),
        nombre: inputs[1].value.trim(),
        apellido_paterno: inputs[2].value.trim(),
        correo: inputs[3].value.trim(),
        numero_celular: inputs[4].value.trim(),
        edad: parseInt(inputs[5].value)
    };

    if (isNaN(datos.id) || datos.id < 0) return alert("El ID no puede ser negativo ni vacío.");
    if (!datos.nombre) return alert("El nombre es obligatorio.");
    if (!datos.apellido_paterno) return alert("El apellido paterno es obligatorio.");
    if (!datos.correo.includes("@")) return alert("Correo inválido.");
    if (!datos.numero_celular) return alert("El número de celular es obligatorio.");
    if (isNaN(datos.edad) || datos.edad < 0) return alert("La edad no puede ser negativa.");

    fetch(`/editar/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(resp => {

        if (resp.error) return alert(resp.error);

        location.reload();
    })
    .catch(err => {
        console.error(err);
        alert("Ocurrió un error al guardar.");
    });
}

// ELIMINAR
function eliminarFila(id) {
    if (!confirm("¿Eliminar este registro?")) return;
    window.location.href = `/eliminar/${id}`;
}
