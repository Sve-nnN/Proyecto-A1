/*Relaciones:
Definir un conjunto A de n elementos (de 4 a 7), los elementos se pueden
elegir en forma aleatoria del conjunto {1,2,3,4,5,6,7,8,9,10,11,12} o
pueden ser ingresados por el usuario. Definir sobre el conjunto A las
relaciones R :

Proyecto A1:
-(x,y) pertenecen a R. x + y es multiplo de M, donde M pertenece a {3,4,5,6}
-Presentar los elementos de R por extension
-Verificar si la relacion es reflexiva, simetrica, transitiva (si la relacion
    es de equivalencia)
-Si es una relacion de equicalencia presentar la clase de equivalencia
de cada elemento
-Que aplicaciones tiene las relaciones de equivalencia en el contexto real

*/
function getRandomArbitrary(min = 0, max = 0) {
  return Math.random() * (max - min) + min;
}

/*
if (generarAutomatico) {
  generarConjunto();
} else {
  // TODO Aqui se puede ingresar el conjunto manualmente
}*/

//Funcion para generar la relacion R
function generarRelacion(A = [], R = [], M = []) {
  //Determinamos los elementos de la relacion R
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      for (let k = 0; k < M.length; k++) {
        //Si la suma de los elementos de A[i] y A[j] es multiplo de M[k]
        if ((A[i] + A[j]) % M[k] == 0) {
          //Entonces se agrega a la relacion R
          R.push([A[i], A[j]]);
        }
      }
    }
  }
}
//Presentamos los elementos de R por extension
function presentarRelacion(R = []) {
  console.log("Elementos de la relacion R: ");
  for (let i = 0; i < R.length; i++) {
    console.log(R[i]);
  }
}
generarRelacion();
presentarRelacion();

export { getRandomArbitrary, generarRelacion, presentarRelacion };
