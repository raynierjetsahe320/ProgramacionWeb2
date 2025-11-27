// Ejemplo rápido de la estructura if/else (por encima)
// if (condicion  => true){
//     // algo
// }else{
//     // este otro
// }

let clave = prompt("Ingresa la clave secreta"); // pide una cadena al usuario
if (clave === "123456") { // compara tipo y valor exacto con la clave esperada
    // clave válida: se ejecuta este bloque
    console.log("Exito");
}
console.log("Continua el flujo"); // se ejecuta siempre, independientemente del if