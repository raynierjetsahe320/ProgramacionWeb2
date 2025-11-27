/**
 * Almacena el número entero ingresado por el usuario mediante prompt.
 * Se obtiene con parseInt, por lo que entradas no numéricas o vacías pueden producir NaN.
 * Recomendación: validar la entrada (Number.isInteger / isNaN) y/o manejar casos de decimal y negativos según el contexto.
 * @type {number}
 */
let variable1 = parseInt( prompt("Ingresa el numero uno"));
let variable2 = parseInt( prompt("Ingresa el numero dos"));

let resultado = ( variable1 + variable2);
console.log(resultado);