function saludar(nombre) {
    console.log("Hola " + nombre);
}

// Suma dos números
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");

var ressultado = sumar(numero1, numero2);
ressultado = sumar(2, 23);
ressultado = sumar(4, 67);
ressultado = sumar(5, 56);

console.log("El total de la suma es: " + ressultado);
