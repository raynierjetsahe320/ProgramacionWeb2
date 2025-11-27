const frutas = ["Papaya"];

frutas.push("Naranja");   // final
frutas.unshift("Manzana"); // inicio
frutas.push("Maracuya");     // final
frutas.unshift("Fresa"); // inicio

console.log(frutas);

// Recorrer todo
for (let fruta of frutas) {
    console.log(fruta);
}

// Eliminar elementos
console.log("------------------------------------------");
frutas.pop(); // elimina último

for (let fruta of frutas) {
    console.log(fruta);
}

console.log("------------------------------------------");
frutas.shift(); // elimina primero

for (let fruta of frutas) {
    console.log(fruta);
}

/*
// Ejemplo de const mal usado
const puerto = 3306;
puerto = 3308; // No se puede reasignar const
console.log(puerto);
*/
