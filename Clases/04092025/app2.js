/*
saludar(); // Llama la función

function saludar() {
    console.log("Hola mundo desde la funcion");
}
*/

/*
console.log(saludar()); // ejecuta
console.log(saludar);   // muestra la función
saludar;                // no hace nada
saludar("Saludar");
console.log(function saludar());
console.log(function saludar);
*/

// Función con parámetro
function saludo(nombreUsuario) {
    alert("Hola como estas " + nombreUsuario);
}

let nombre = prompt("Nombre: ");
saludo(nombre); // llama la función
