import {
  getRandomArbitrary,
  generarRelacion,
  generarConjunto,
  esReflexiva,
  esSimetrica,
  esTransitiva,
  esEquivalencia,
  claseEquivalencia,
} from "./logic";

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
        A = &lbrace;
        {A.map((item, id) => (
          <span key={id}>{item};</span>
        ))}
        &rbrace;
      </div>
      {/*Mostrar la relacion R*/}
      <div>
        R = &lbrace;
        {R.map((item, id) => (
          <span key={id}>
            ({item[0]},{item[1]}) ;
          </span>
        ))}
        &rbrace;
      </div>
      {/*Determinar si la relacion es reflexiva, simetrica o transitiva
      Relativa reflexiva: Si para cada elemento a de A, aRa.
      Relativa simétrica: Si para cada par de elementos a y b de A, aRb implica bRa.
      Relativa transitiva: Si para cada trío de elementos a, b y c de A, aRb y bRc implican aRc. */}
      <div>
        {
          //Propiedades de la relacion
        }
        <p>
          ¿La relacion es reflexiva?{" "}
          <strong>{esReflexiva(A, R) ? "Si" : "No"}</strong>
        </p>

        <p>
          ¿La relacion es simetrica?{" "}
          <strong>{esSimetrica(A, R) ? "Si" : "No"}</strong>
        </p>

        <p>
          ¿La relacion es transitiva?{" "}
          <strong>{esTransitiva(A, R) ? "Si" : "No"}</strong>
        </p>
      </div>
      <div>
        {
          //Determinar si la relacion es de equivalencia. Si es, muestra la clase de equivalencia
          esEquivalencia(A, R) ? (
            <>Es una relación de equivalencia: {claseEquivalencia(A, R)}</>
          ) : (
            "No es una relaciónn de equivalencia"
          )
        }
      </div>{" "}
    </>
  );
}
