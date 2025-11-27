// Voy a pedir dos números al usuario
let numero1 = prompt("Ingresa el numero1:");
let numero2 = prompt("Ingresa el numero2:");

// Antes eran textos
console.log("Tipo antes:", typeof numero1);

// Los convierto a enteros para poder operar
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// Ahora deberían ser números
console.log("Tipo después:", typeof numero1);

// Hago las operaciones básicas y las muestro en la consola
console.log("Suma: " + (numero1 + numero2));
console.log("Resta: " + (numero1 - numero2));
console.log("Multiplicación: " + (numero1 * numero2));
console.log("División: " + (numero1 / numero2));
console.log("Módulo: " + (numero1 % numero2));