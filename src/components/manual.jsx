import { useState } from "react";
import {
  generarRelacion,
  esReflexiva,
  esSimetrica,
  esTransitiva,
  esEquivalencia,
  claseEquivalencia,
} from "./logic";

//Funcion para dejar elegir al usuario los elementos de la relacion
//segun el conjunto que escribio. Hay que comprobar que estos estan
//dentro del conjunto R
//Imprimimos cada elemento de A para que el usuario escoja cuales quiere
//agregar a la relacion, Si cumple con M, se agrega a la relacion R
function imprimirElementosParaRelacion(A, R, M, text, setText) {
  let aux = [];
  //Funcion para manejar el click y que agreguen el elemento seleccionado
  //a la relacion
  function handleClick(e) {
    e.preventDefault();
    aux.push(e.target.innerHTML);
    console.log(aux);

    if (aux.length == 2) {
      for (let i = 0; i < aux.length; i++) {
        if ((aux[0] + aux[1]) % M[i] == 0) {
          R.push(aux);
          console.log(R);
          aux = [];
          setText(
            "✅ Elemento " + aux[0] + " " + aux[1] + " agregado con exito ✅"
          );
        } else {
          aux = [];
          setText("❌ Elemento " + aux[0] + " " + aux[1] + " no cumple ❌");
        }
      }
    }
    console.log({ R });
  }
  return (
    <>
      <p>{text}</p>
      <div className="flex items-center justify-around">
        {A.map((elemento) => (
          <button
            key={elemento}
            className="btn btn-outline"
            onClick={handleClick}
          >
            {elemento}
          </button>
        ))}
      </div>
    </>
  );
}
//Aqui es donde vamos a imprimir todo lo que viene despues de generar la relacion
//Una vez haya elemntos en la relacion, se va a imprimir todo lo que es
//la relacion como tal, si es reflexiva, simetrica, transitiva, etc. y si es
//equivalencia, se va a imprimir la clase de equivalencia de cada elemento
function mostrarElementosRyDeterminar(A, R, M) {
  let n = A.length;
  let reflexiva = esReflexiva(A, R);
  let simetrica = esSimetrica(A, R);
  let transitiva = esTransitiva(A, R);
  let equivalencia = esEquivalencia(A, R);
  let clase = claseEquivalencia(A, R);
  return (
    <>
      <div>n={n}</div>
      <div>
        A = &#123;
        {A.map((item, id) => (
          <span key={id}>{item};</span>
        ))}
        &#125;
      </div>
      <div>
        R = &#123;
        {R.map((item, id) => (
          <span key={id}>
            ({item[0]},{item[1]}) ;
          </span>
        ))}
        &#125;
      </div>
      {
        //Determinar si la relacion es reflexiva, simetrica o transitiva
      }
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
            <>Es una relación de equivalencia: {clase}</>
          ) : (
            "No es una relaciónn de equivalencia"
          )
        }
      </div>
    </>
  );
}
//Este va a ser el componente donde el usuario introduzca el conjunto por su cuenta
//para generar la relacion y las otras cosas
export default function GenerarConjuntoManual({ A = [], R = [], M }) {
  const [conjunto, setConjunto] = useState([]);
  const [text, setText] = useState(
    "Escoge los elementos que conformaran la relacion"
  );
  const [comasText, setComasText] = useState("Separa los elementos por comas");
  A = conjunto;

  function onSubmit(e) {
    e.preventDefault();
    let placeholder = e.target.conjunto.value.split(",");
    let conjuntoNums = placeholder.map((item) => parseInt(item));
    //Determinar si el conjunto tiene mas de 4 caracteres y menos de 7

    if (conjuntoNums.length == 0) {
      setComasText("No has introducido ningun conjunto");
      return;
    } else if (conjuntoNums.length < 4 || conjuntoNums.length > 7) {
      setComasText("El conjunto introducido no es valido ❌");
    } else {
      setComasText("Conjunto creado con exito. ✅");
      console.log(conjuntoNums);
      setConjunto(conjuntoNums);
    }
  }

  let n = conjunto.length;

  return (
    <>
      {
        //Formulario para que el usuario introduzca su conjunto manualmente
      }
      <form onSubmit={onSubmit}>
        <p>{comasText}</p>
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
      {n > 0 ? imprimirElementosParaRelacion(A, R, M, text, setText) : null}
      {R.length > 0 ? mostrarElementosRyDeterminar(A, R, M) : null}
    </>
  );
}
