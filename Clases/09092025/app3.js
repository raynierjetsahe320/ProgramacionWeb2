// Lista inicial donde se guardarán las frutas seleccionadas
const frutas = [];

// Primera fruta solicitada
const primera = prompt("Bienvenido al mercado: escribe una fruta para añadir al carrito:");
frutas.push(primera); // Guarda la primera fruta

// Ciclo que pregunta si se desea continuar
while (confirm("¿Deseas incluir otra fruta en tu carrito?")) {
    const nueva = prompt("Escribe el nombre de otra fruta que quieras añadir:");
    frutas.push(nueva); // Agrega la siguiente fruta ingresada
}

// Mostrar el listado final de compras
console.log("Listado final de frutas en tu carrito:");
for (let fruta of frutas) {
    console.log(fruta); // Muestra cada fruta agregada
}
