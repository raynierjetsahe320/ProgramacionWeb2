let optUser = prompt(`
    Selecciona una opcion
        1.- Libros
        2.- Peliculas
        3.- Juegos
    `); // pide al usuario una opción (devuelve string o null si cancela)

switch (optUser){
    case "1":
        console.log("Principito"); // caso "1": muestra un libro
        break;
    case "2":
        console.log("Matrix"); // caso "2": muestra una película
        break;
    case "3":
        console.log("FIFA"); // caso "3": muestra un juego
        break;
    default:
        console.log("Opcion no valida"); // cualquier otro valor -> opción inválida
        break;
    
}