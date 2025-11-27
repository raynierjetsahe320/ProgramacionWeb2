// Función declarativa: devuelve un entero aleatorio >= min y < max
function numeroAleatorio(min,max) {
    return Math.floor( Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(1,11));

// Función expresada: misma lógica, asignada a una constante
const miNumero = function numeroAleatorio(min,max) {
    return Math.floor( Math.random()*(max-min)+min);
}
console.log(miNumero(2,20));
