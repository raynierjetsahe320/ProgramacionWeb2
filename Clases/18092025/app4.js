// Catálogo inicial con artículos disponibles
var catalogo = [
    { articulo: 'camisa', costo: 300 },
    { articulo: 'pantalon', costo: 500 },
    { articulo: 'zapatos', costo: 400 },
    { articulo: 'sombrero', costo: 200 }
];

// Carrito donde se guardan las selecciones del usuario
var bolsa = [];

// Construye el menú principal con todas las opciones
function menuPrincipal() {
    var texto = "=== TIENDA DE ROPA === 👕\n";
    texto += "Elige una opción:\n";

    for (var i = 0; i < catalogo.length; i++) {
        texto += (i + 1) + ". Comprar " + catalogo[i].articulo +
                 " - $" + catalogo[i].costo + "\n";
    }

    texto += (catalogo.length + 1) + ". Revisar carrito y total\n";
    texto += (catalogo.length + 2) + ". Editar carrito\n";
    texto += (catalogo.length + 3) + ". Panel administrador\n";
    texto += (catalogo.length + 4) + ". Salir\n";

    return texto;
}

// Añade un producto al carrito
function meterABolsa(pos) {
    var item = catalogo[pos];
    bolsa.push(item);
    console.log('Artículo "' + item.articulo + '" añadido a la bolsa.');
}

// Muestra lo que hay en el carrito y calcula el total
function verBolsa() {
    if (bolsa.length === 0) {
        console.log("Tu bolsa está vacía.");
        return;
    }

    var resumen = "Contenido de tu bolsa:\n";
    var suma = 0;

    for (var i = 0; i < bolsa.length; i++) {
        resumen += (i + 1) + ". " + bolsa[i].articulo +
                   " - $" + bolsa[i].costo + "\n";
        suma += bolsa[i].costo;
    }

    resumen += "\nTotal a pagar: $" + suma;
    console.log(resumen);
}

// Permite quitar elementos del carrito
function editarBolsa() {
    if (bolsa.length === 0) {
        console.log("No puedes editar: la bolsa está vacía.");
        return;
    }

    var lista = "¿Qué artículo deseas eliminar?\n";
    for (var i = 0; i < bolsa.length; i++) {
        lista += (i + 1) + ". " + bolsa[i].articulo +
                 " - $" + bolsa[i].costo + "\n";
    }

    var quitar = Number(prompt(lista));

    if (isNaN(quitar) || quitar < 1 || quitar > bolsa.length) {
        console.log("Selección inválida.");
    } else {
        var borrado = bolsa.splice(quitar - 1, 1)[0];
        console.log('Artículo "' + borrado.articulo + '" fue eliminado.');
    }
}

// Permite al administrador agregar productos nuevos
function adminPanel() {
    var nuevoNombre = prompt("Nombre del nuevo artículo:");
    var nuevoCosto = Number(prompt("Precio del artículo:"));

    if (!nuevoNombre || isNaN(nuevoCosto) || nuevoCosto <= 0) {
        console.log("Datos incorrectos. No se agregó nada.");
    } else {
        catalogo.push({ articulo: nuevoNombre, costo: nuevoCosto });
        console.log('Se añadió "' + nuevoNombre + '" al catálogo.');
    }
}

// Bucle principal
var eleccion;

do {
    eleccion = Number(prompt(menuPrincipal()));

    if (isNaN(eleccion) || eleccion < 1 || eleccion > catalogo.length + 4) {
        console.log("Opción no reconocida.");
    }
    else if (eleccion >= 1 && eleccion <= catalogo.length) {
        meterABolsa(eleccion - 1);
    }
    else if (eleccion === catalogo.length + 1) {
        verBolsa();
    }
    else if (eleccion === catalogo.length + 2) {
        editarBolsa();
    }
    else if (eleccion === catalogo.length + 3) {
        adminPanel();
    }

} while (eleccion !== catalogo.length + 4);

console.log("Gracias por comprar con nosotros.");
