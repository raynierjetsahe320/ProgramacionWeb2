/*
let numUsuario = parseInt(prompt("Ingresa un numero mayor a 10"));

if(numUsuario >= 10){
    console.log("Genial")
}else{
    console.log("Mal");
}
*/
// Bloque comentado: pide un número y valida si es mayor o igual a 10,
// imprime "Genial" si cumple o "Mal" si no (ejemplo de uso de prompt y condicional).

// ...existing code...
// let port ;

// if(port){
//     console.log("Deficion de puerto correcto");
// }else{
//     console.error("Error en puerto");
// }
// Bloque comentado: muestra la comprobación de truthy/falsy en una variable `port`,
// útil para validar si una configuración está definida.

// ...existing code...
let datos = 15 != 15; // comprueba desigualdad; devuelve un booleano (true/false)
// Nota: `!=` compara valores haciendo coerción; usar `!==` para comparar sin coerción.
console.log(datos); // imprime el resultado (aquí será false)