// Número aleatorio del 1 al 10
let numeroMaquina = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(numeroMaquina);

let numUser = parseInt(prompt("Adivina el Numero magico"));
let vidas = 3;

// AND (&&) solo es true cuando ambos son 1
/*
1 && 1 = true
todo lo demás = false
*/

while (numeroMaquina !== numUser && vidas > 1) {
    vidas--; // resta una vida
    numUser = parseInt(prompt("Vuelve a intentar. Vidas -> " + vidas));
}

if (numUser === numeroMaquina) {
    alert("Ganaste");
} else {
    alert("Perdiste");
}
