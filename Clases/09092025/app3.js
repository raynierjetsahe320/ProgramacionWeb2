// Arreglo vacío para guardar las frutas
const frutas = [];

// Primer fruta ingresada
const fruta = prompt("Feria de fruta: ¿Qué fruta quieres agregar?");
frutas.push(fruta); // Se guarda la fruta en el arreglo

// Confirm pregunta con ventana de aceptar/cancelar
while (confirm("¿Quieres agregar otra fruta?")) {
    const fruta = prompt("¿Qué otra fruta quieres agregar?");
    frutas.push(fruta); // Se agrega la nueva fruta al arreglo
}

// Mostrar todo lo comprado
console.log("Usted compró:");
for (let fruta of frutas) {
    console.log(fruta); // Imprime cada fruta
}
