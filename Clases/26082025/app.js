// Ejemplo con var (comentado): var permite redeclarar/reasignar y tiene alcance funcional.
// var nombre;
// nombre = "Aaron";
// console.log(nombre);
// var dato = "UNAM";
// console.log(dato);
// var dato = 31;
// console.log(dato);

// Uso de let: alcance de bloque, se puede reasignar pero no redeclarar en el mismo ámbito.
let nombre;
nombre = "Aaron";
console.log(nombre);
/*
let nombre; // redeclarar aquí daría error
nombre = "Jonathan";
*/

// Constante: valor fijo; intentar reasignarla provoca un error en tiempo de ejecución.
const pi = 3.1416;
// pi = 5.89; // <-- esto fallaría: TypeError: Assignment to constant variable.
console.log(pi);

// Formas de comentarios:
// - // una línea
// - /* ... */ bloque
// - /*** ... ***/ bloque decorativo
// ...existing code...