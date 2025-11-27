// Ejemplos comentados que muestran AND y OR:
// var logico = false && false; // AND: ambas deben ser true -> false
// console.log(logico);

// var logico = true || false; // OR: basta una true -> true
// console.log(logico);

// Evaluación actual: 20 == 10 es false, 8 > 3 es true, false || true => true
var logico = 20 == 10 || 8 > 3;
console.log(logico); // imprime: true

// Sugerencia: usar === para igualdad estricta si se desea evitar coerción de tipos
var logico2 = 20 === "20"; // false, tipos diferentes
console.log(logico2); // imprime: false
var logico3 = 20 !== "20"; // true, son diferentes
console.log(logico3); // imprime: true
var logico4 = (5 < 3) && (10 >= 10); // false && true => false
console.log(logico4); // imprime: false
var logico5 = (7 <= 7) || (2 > 5); // true || false => true
console.log(logico5); // imprime: true
var logico6 = !(15 < 10); // negación de false => true
console.log(logico6); // imprime: true
var logico7 = !(4 === 4); // negación de true => false
console.log(logico7); // imprime: false


    