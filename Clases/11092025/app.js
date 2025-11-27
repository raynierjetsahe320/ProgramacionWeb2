// Arreglo vacío para guardar los nombres
let nombres = [];

// Función para agregar un nombre al arreglo
function agregarNombre() {
    let nombre = prompt("Ingresa el nombre: ");
    
    // Si el usuario escribió algo
    if (nombre) {
        nombres.push(nombre); // Se agrega al arreglo
        alert(`El nombre "${nombre}" fue agregado correctamente`);
    } else {
        alert(`El nombre está vacío`);
    }
}

// Función para mostrar los nombres almacenados
function monstrarNombres() {

    // Si no hay nombres en el arreglo
    if (nombres.length === 0) {
        alert(`No hay nombres almacenados`);
    } else {
        let mensaje = "Nombres almacenados:\n";

        // Recorrer arreglo y construir mensaje
        nombres.forEach((nombre, index) => {
            mensaje += `${index + 1}. ${nombre}\n`;
        });

        alert(mensaje);
    }
}

// Función del menú principal
function mostrarMenu() {
    let option;

    do {
        option = prompt(`
Opciones:
1.- Agregar nombre
2.- Mostrar nombres
3.- Salir
Elige una opción:
        `);

        // Comprobación de la opción ingresada
        switch (option) {
            case '1':
                agregarNombre();
                break;

            case '2':
                monstrarNombres();
                break;

            case '3':
                alert(`Saliendo del programa...`);
                break;

            default:
                alert(`Opción no válida`);
        }

    } while (option !== '3'); // Se repite mientras no elija salir
}

// Iniciar programa
mostrarMenu();
