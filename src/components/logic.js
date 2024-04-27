import { useState } from "react";
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

/*
if (generarAutomatico) {
  generarConjunto();
} else {
  // TODO Aqui se puede ingresar el conjunto manualmente
}*/

//Funcion para generar la relacion R

//Presentamos los elementos de R por extension
export function presentarRelacion(R = []) {
  console.log("Elementos de la relacion R: ");
  for (let i = 0; i < R.length; i++) {
    console.log(R[i]);
  }
}

export function generarRelacion(A = [], R = [], M = []) {
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
  //Filtramos los duplicados
  R = R.map(JSON.stringify);
  R = [...new Set(R)];
  R = R.map(JSON.parse);
  //Ordenamos de menor a mayor
  R.sort((a, b) => a - b);
  return R;
}
export function generarConjunto(n, conjuntoEjemplo, A) {
  for (let i = 1; i <= n; i++) {
    A.push(conjuntoEjemplo[Math.floor(Math.random() * 12)]);
  }
  //Ordenamos de menor a mayor
  A.sort((a, b) => a - b);
  return A;
}
//Generamos un numero aleatorio entre el minimo y el maximo dado
export function getRandomArbitrary(min = 0, max = 0) {
  return Math.random() * (max - min) + min;
}
//Determinar propiedades de la relacion
//Reflexiva
export function esReflexiva(A, R) {
  let reflexiva = true;
  for (let i = 0; i < A.length; i++) {
    if (!R.find((element) => element[0] === A[i] && element[1] === A[i])) {
      reflexiva = false;
      break;
    }
  }
  return reflexiva;
}
export function esSimetrica(A, R) {
  let simetrica = true;
  for (let i = 0; i < R.length; i++) {
    if (
      !R.find((element) => element[0] === R[i][1] && element[1] === R[i][0])
    ) {
      simetrica = false;
      break;
    }
  }
  return simetrica;
}
export function esTransitiva(A, R) {
  let transitiva = true;
  for (let i = 0; i < R.length; i++) {
    for (let j = 0; j < R.length; j++) {
      if (R[i][1] === R[j][0]) {
        if (
          !R.find((element) => element[0] === R[i][0] && element[1] === R[j][1])
        ) {
          transitiva = false;
          break;
        }
      }
    }
  }
  return transitiva;
}
//Determinar si la relacion es de equivalencia
export function esEquivalencia(A, R) {
  return esReflexiva(A, R) && esSimetrica(A, R) && esTransitiva(A, R);
}
//Mostrar la clase de equivalencia de cada elemento
export function claseEquivalencia(A, R) {
  let clases = [];
  for (let i = 0; i < A.length; i++) {
    let clase = [];
    clase.push(A[i]);
    for (let j = 0; j < R.length; j++) {
      if (R[j][0] === A[i]) {
        clase.push(R[j][1]);
      }
    }
    clases.push(clase);
  }

  return clases;
}
