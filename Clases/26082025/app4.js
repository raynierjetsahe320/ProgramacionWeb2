// Ejemplos previos (comentados): suma simple y uso de prompt/alert
// let numero1 = 2;
// let numero2 = 2;
// console.log(numero1 + numero2);
// let nombre = prompt("ingresa tu nombre:");
// console.log(nombre);
// alert(nombre);

// Pedimos dos valores al usuario (siempre llegan como strings)
let variable1 = prompt("Ingresa el numero uno");
let variable2 = prompt("Ingresa el numero dos");

// Mostramos el tipo actual (debería ser "string")
console.log(typeof variable1);

// Convertimos la primera entrada a entero (parseInt devuelve NaN si no es numérico)
let tmp = parseInt(variable1);
console.log(typeof tmp);

// Aquí se está concatenando porque variable1 y variable2 siguen siendo strings
let resultado = ( variable1 + variable2);
console.log(resultado);