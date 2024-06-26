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
  let equivalencia = esEquivalencia(A, R);
  let reflexiva = esReflexiva(A, R);
  let simetrica = esSimetrica(A, R);
  let transitiva = esTransitiva(A, R);
  let clase = claseEquivalencia(A, R);

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
        A = &#123;
        {A.map((item, id,row) => id+1==row.length?(
          <span key={id}>{item} </span>
        ):(<span key={id}>{item}; </span>))}
        &#125;
      </div>
      {/*Mostrar la relacion R*/}
      <div>
      <div>
        R = &#123;
        {R.map((item, id,row) => id+1==row.length?(
          <span key={id}>
            ({item[0]},{item[1]}) 
          </span>
        ):(<span key={id}>
          ({item[0]},{item[1]}) ;
        </span>))}
        &#125;
      </div>
        &#125;
      </div>
      {/*Determinar si la relacion es reflexiva, simetrica o transitiva
      Relativa reflexiva: Si para cada elemento a de A, aRa.
      Relativa simétrica: Si para cada par de elementos a y b de A, aRb implica bRa.
      Relativa transitiva: Si para cada trío de elementos a, b y c de A, aRb y bRc implican aRc. */}
      <div>
        <p>
          ¿La relacion es reflexiva?
          <strong>{reflexiva ? "Si" : "No"}</strong>
        </p>
        <p>
          ¿La relacion es simetrica?
          <strong>{simetrica ? "Si" : "No"}</strong>
        </p>
        <p>
          ¿La relacion es transitiva?
          <strong>{transitiva ? "Si" : "No"}</strong>
        </p>
      </div>
      <div>
        {
          //Determinar si la relacion es de equivalencia. Si es, muestra la clase de equivalencia
          equivalencia ? (
            <>
              [R]=&#123;
              {clase.map((clase, id) => (
                <>
                  <span key={id}>[{clase[0]}]</span>
                </>
              ))}
              &#125;
            </>
          ) : (
            "No es una relaciónn de equivalencia"
          )
        }
      </div>
    </>
  );
}
