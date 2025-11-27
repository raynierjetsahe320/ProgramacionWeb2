// var logico = false && false; // ejemplo: false AND false => false
// console.log(logico);

// var logico = true || false; // ejemplo: true OR false => true
// console.log(logico);

// OR (||) - devuelve true si al menos una de las condiciones es verdadera
console.log("=== OR (||) ===");
console.log("20 == 10 || 8 > 3  =>", 20 == 10 || 8 > 3);   // false || true  => true
console.log("20 == 10 || 8 < 3  =>", 20 == 10 || 8 < 3);   // false || false => false
console.log("20 > 10  || 8 > 3  =>", 20 > 10  || 8 > 3);   // true  || true  => true
console.log("20 > 10  || 8 < 3  =>", 20 > 10  || 8 < 3);   // true  || false => true

// AND (&&) - devuelve true solo si ambas condiciones son verdaderas
console.log("\n=== AND (&&) ===");
console.log("20 == 10 && 8 > 3  =>", 20 == 10 && 8 > 3);   // false && true  => false
console.log("20 == 10 && 8 < 3  =>", 20 == 10 && 8 < 3);   // false && false => false
console.log("20 > 10  && 8 > 3  =>", 20 > 10  && 8 > 3);   // true  && true  => true
console.log("20 > 10  && 8 < 3  =>", 20 > 10  && 8 < 3);   // true  && false => false
