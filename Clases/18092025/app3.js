// Ejemplos rápidos sobre objetos en JavaScript: creación, lectura, actualización y eliminación.

// Ejemplo 1: crear un objeto usando new Object() (comentado)
// Se muestra la forma más "manual" de asignar propiedades.
// ...existing code...
/*
    var miCarro = new Object();
    miCarro.marca  = 'Toyota';
    miCarro.modelo = 'supra';
    miCarro.color = 'rojo';

    console.log(miCarro);
*/
// ...existing code...

// Ejemplo 2: arreglo (para diferenciar de un objeto)
// Los arrays son listas ordenadas, no pares clave-valor.
// ...existing code...
/*
    //Ejemplo de arreglo, no es lo mismo que un Objeto
    let frutas=["banana","manzana","pera"];
    console.log(frutas);
*/
// ...existing code...

// Ejemplo 3: literal de objeto (forma recomendada y más corta)
// Aquí definimos las propiedades dentro de llaves.
// ...existing code...
/*
    var miCarro = {
        marca: 'Toyota',
        modelo: 'supra',
        color: 'rojo'
    }

    console.log(miCarro);
*/
// ...existing code...

// Objeto perro con varias propiedades y un arreglo como valor
var perro = {
    nombre: 'Shayla',           // nombre del perro
    color: 'Sal pimienta',      // descripción del color
    edad: 28,                   // edad en años
    talla: 'mediana',           // tamaño
    enemigos: ["Otro perro","gatos","baños"] // lista de "enemigos"
}

console.log(perro); // mostrar todo el objeto
// console.log(perro.color);         // acceso a una propiedad concreta
// console.log(perro.enemigos[1]);   // acceso a un elemento del arreglo

// Agregar una nueva propiedad dinámicamente
perro.raza='schnauzer';
console.log(perro);

// Leer una propiedad existente
console.log(perro.edad);

// Actualizar una propiedad
perro.edad = 35;
console.log(perro.edad);

// Eliminar una propiedad
delete perro.edad;
console.log(perro);


