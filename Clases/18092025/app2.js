/*
  // funcion tradicional
  function numero (a){
      return a+100;
  }

  // 1- arrow con cuerpo y return explícito
  (a) => {
      return a+100;
  }
  // 2- arrow con expresión concisa (return implícito)
  (a) => a+100;
  // 3- paréntesis opcionales para un solo parámetro
  a => a+100;
  // 4- cuidado: usando llaves sin 'return' devuelve undefined
  (a,b) => { a+100 };
*/

const miNumeroFlecha = (max) => {
    // genera un entero aleatorio entre 1 y (max - 1)
    // si quieres incluir 'max' en el rango usa: Math.floor(Math.random()*max)+1
    return Math.floor(Math.random() * (max - 1)) + 1;
}

console.log(miNumeroFlecha(50));

