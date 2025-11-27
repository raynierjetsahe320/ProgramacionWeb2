// Tienda simple: lista de productos, carrito y menú interactivo vía prompt/console

var productos = [
    { nombre: 'camisa', precio: 300 },   // lista de productos disponibles
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = []; // almacena los productos seleccionados

// Construye y devuelve el texto del menú con opciones para cada producto,
// opción para ver el carrito y opción para salir.
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Salir\n";

    return menu;
}

// Agrega el producto (por índice) al arreglo carrito y muestra un mensaje breve.
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Muestra los elementos del carrito y calcula el total.
// Si está vacío, indica que no hay productos.
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Bucle principal: muestra el menú, pide una opción, valida y actúa según la elección.
// Convierte la entrada a número y repite hasta elegir "Salir".
var opcion;
do {
    opcion = prompt(mostrarMenu());

    // Convertir la opción ingresada a un número
    opcion = Number(opcion);

    // Validación básica de la opción ingresada
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 2) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        // Agrega el producto correspondiente al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        // Muestra el carrito y el total acumulado
        mostrarCarritoYTotal();
    }
} while (opcion !== productos.length + 2); // salir cuando elige la última opción

console.log("Gracias por visitar la tienda.");
