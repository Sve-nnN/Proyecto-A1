import { useState } from "react";
import {
  generarRelacion,
  esReflexiva,
  esSimetrica,
  esTransitiva,
  esEquivalencia,
  claseEquivalencia,
} from "./logic";
//Este va a ser el componente donde el usuario introduzca el conjunto por su cuenta
//para generar la relacion y las otras cosas
export default function GenerarConjuntoManual({ A = [], R = [], M }) {
  const [conjunto, setConjunto] = useState([]);
  A = conjunto;

  function onSubmit(e) {
    e.preventDefault();
    let placeholder = e.target.conjunto.value.split(",");
    let conjuntoNums = placeholder.map((item) => parseInt(item));
    console.log(conjuntoNums);
    setConjunto(conjuntoNums);
  }
  R = generarRelacion(A, R, M);

  let n = conjunto.length;

  return (
    <>
      {
        //Formulario para que el usuario introduzca su conjunto manualmente
      }
      <form onSubmit={onSubmit}>
        <p>Separa los elementos por comas</p>
        <input
          type="text"
          placeholder="Introduce tu conjunto"
          name="conjunto"
          className="input input-bordered bg-slate-50 w-full max-w-xs"
        />

        <button className="btn btn-outline btn-accent" type="submit">
          Generar
        </button>
      </form>
      {
        //Si el conjunto tiene elementos, mostrar los elementos de A y la relacion
      }
      {conjunto.length > 0 ? (
        <>
          <div>n={n}</div>
          <div>
            A = &lbrace;
            {A.map((item, id) => (
              <span key={id}>{item};</span>
            ))}
            &rbrace;
          </div>
          <div>
            R = &lbrace;
            {R.map((item, id) => (
              <span key={id}>
                ({item[0]},{item[1]}) ;
              </span>
            ))}
            &rbrace;
          </div>
          {
            //Determinar si la relacion es reflexiva, simetrica o transitiva
          }
          <div>
            <p>
              ¿La relacion es reflexiva?
              <strong>{esReflexiva(A, R) ? "Si" : "No"}</strong>
            </p>
            <p>
              ¿La relacion es simetrica?
              <strong>{esSimetrica(A, R) ? "Si" : "No"}</strong>
            </p>
            <p>
              ¿La relacion es transitiva?
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
          </div>
        </>
      ) : null}
    </>
  );
}
