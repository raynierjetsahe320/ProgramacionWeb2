function mostrarMenu() {
    const menu = `
Selecciona una opción:
1 - Libros
2 - Películas
3 - Juegos
(Pulsa Cancelar para salir)
`;
    while (true) {
        const entrada = prompt(menu);
        if (entrada === null) {
            console.log('Operación cancelada');
            return;
        }
        const opcion = parseInt(entrada.trim(), 10);
        if (Number.isInteger(opcion)) {
            switch (opcion) {
                case 1:
                    console.log('Estaciones de Ferrocarrils');
                    return;
                case 2:
                    console.log('Crepusculo');
                    return;
                case 3:
                    console.log('Minecraft');
                    return;
                default:
                    console.log('Opción no válida, intenta de nuevo.');
            }
        } else {
            console.log('Entrada no válida, introduce un número.');
        }
    }
}

mostrarMenu();