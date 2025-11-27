// Solicito tres números y los convierto a tipo Number
const nro1 = Number(prompt("Ingresa el primer número:"));
const nro2 = Number(prompt("Ingresa el segundo número:"));
const nro3 = Number(prompt("Ingresa el tercer número:"));

// Muestro los valores recibidos
console.log("Primer número:", nro1);
console.log("Segundo número:", nro2);
console.log("Tercer número:", nro3);

// Obtengo mayor y menor usando utilidades de array
const lista = [nro1, nro2, nro3];
const mayor = Math.max(...lista);
const menor = Math.min(...lista);

console.log("\nEl mayor es:", mayor);
console.log("El menor es:", menor);

// Verifico las igualdades con un Set
const tipos = new Set(lista).size;
if (tipos === 1) {
    console.log("Los tres números son iguales");
} else if (tipos === 2) {
    console.log("Y dos números son iguales");
} else {
    console.log("Y no hay números iguales");
}
