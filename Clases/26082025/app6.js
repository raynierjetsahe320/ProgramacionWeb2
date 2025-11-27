let variable1 = parseFloat(prompt("ingresa primer valor")); // pide el primer número (cadena -> número flotante)
let variable2 = parseFloat(prompt("ingresa segundo valor")); // pide el segundo número

let sum = variable1 + variable2; // suma
let rest = variable1 - variable2; // resta
let mul = variable1 * variable2; // multiplicación
let div = variable1 / variable2; // división (puede dar Infinity si divisor es 0)

console.log("Resultado de suma es: " + sum); // muestra suma en la consola
console.log("Resultado de resta es: " + rest); // muestra resta
console.log("Resultado de multiplicacion es: " + mul); // muestra multiplicación