/*
var estado = true;
if (estado) {
    var estado = false; // var se vuelve a reasignar
}
console.log(estado); // imprime false
*/

/*
let estado = true;
if (estado) {
    let estado = false; // este let solo vive dentro del if
}
console.log(estado); // imprime true
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i = "Raynier"; // este i es otro diferente
console.log(i);
*/

// const no permite reasignar la variable completa
const array = [];
array = ["Hola un arreglo1"]; // Esto marca error
console.log(array);

/*
const miArray = [];
miArray[0] = ["Hola un arreglo2"]; // Modificar contenido sí se puede
console.log(miArray);
*/
