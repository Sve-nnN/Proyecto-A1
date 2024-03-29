import { getRandomArbitrary } from "./logic";

function generarRelacion(A, R, M) {
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
function generarConjunto(n, conjuntoEjemplo, A) {
  for (let i = 1; i <= n; i++) {
    A.push(conjuntoEjemplo[Math.floor(Math.random() * 12)]);
  }
  //Ordenamos de menor a mayor
  A.sort((a, b) => a - b);
  return A;
}
function presentarRelacion(R = []) {
  console.log("Elementos de la relacion R: ");
  for (let i = 0; i < R.length; i++) {
    console.log(R[i]);
  }
}
export default function generarConjuntoAutomatico({
  A = [],
  conjuntoEjemplo,
  R = [],
  M,
}) {
  //Funcion para generar un conjunto aleatorio
  let n = getRandomArbitrary(4, 7);

  A = generarConjunto(n, conjuntoEjemplo, A);
  R = generarRelacion(A, R, M);

  console.log({ A });
  console.log({ R });

  /*
  -Verificar si la relacion es reflexiva, simetrica, transitiva (si la relacion
  es de equivalencia)
  -Si es una relacion de equicalencia presentar la clase de equivalencia
  de cada elemento*/
  return (
    <>
      <div> n= {Math.floor(n)}</div>
      {/*Mostrar el conjunto A*/}
      <div>
        A = [
        {A.map((item, id) => (
          <span key={id}>{item};</span>
        ))}
        ]
      </div>
      {/*Mostrar la relacion R*/}
      <div>
        R = [
        {R.map((item, id) => (
          <span key={id}>
            ({item[0]},{item[1]}) ;
          </span>
        ))}
        ]
      </div>
      {/*Determinar si la relacion es reflexiva, simetrica o transitiva
      Relativa reflexiva: Si para cada elemento a de A, aRa.
      Relativa simétrica: Si para cada par de elementos a y b de A, aRb implica bRa.
      Relativa transitiva: Si para cada trío de elementos a, b y c de A, aRb y bRc implican aRc. */}
      <div>
        {/*Reflexiva*/}
        <div>
          Son reflexivos:
          {A.map((item, id) => (
            <span key={id}>
              {R.find((element) => element[0] === item && element[1] === item)
                ? `(${item},${item})`
                : ""}
            </span>
          ))}
        </div>
        {/*Simetrica*/}
        <div>
          Son simetricos:
          {A.map((item, id) => (
            <span key={id}>
              {R.find(
                (element) =>
                  element[0] === item &&
                  element[1] === item &&
                  R.find(
                    (element2) =>
                      element2[0] === element[1] && element2[1] === element[0]
                  )
              )
                ? `(${item},${item})`
                : ""}
            </span>
          ))}
        </div>
        <div>
          Son transitivos:
          {A.map((item, id) => (
            <span key={id}>
              {R.find(
                (element) =>
                  element[0] === item &&
                  element[1] === item &&
                  R.find(
                    (element2) =>
                      element2[0] === element[1] &&
                      element2[1] === element[0] &&
                      R.find(
                        (element3) =>
                          element3[0] === element2[1] &&
                          element3[1] === element2[0]
                      )
                  )
              )
                ? `(${item},${item})`
                : ""}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
