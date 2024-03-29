import { useState } from "react";
import Automatic from "./components/automatic";
import "./App.css";

function App() {
  const [automatico, setAutomatico] = useState();
  //Declaramos los conjuntos
  let A = [];
  let conjuntoEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let M = [3, 4, 5, 6];
  let R = [];
  let generarAutomatico = false;

  console.log(A);
  return (
    <div className="artboard artboard-horizontal phone-2 bg-slate-100 rounded ">
      <h1 className="text-2xl font-bold text-center text-gray-900">
        Relaciones
      </h1>
      <h2 className="text-xl font-bold text-center text-gray-900">
        Proyecto A1
      </h2>
      <p className=" text-gray-800">
        Quieres que A sea automatico o ingresar manualmente?
      </p>
      <div className="flex justify-center gap-5">
        <button className="btn btn-primary" onClick={() => setAutomatico(true)}>
          Automatico
        </button>
        <button
          className="btn btn-neutral"
          onClick={() => setAutomatico(false)}
        >
          Manual
        </button>
      </div>
      <div className="flex justify-center gap-5  flex-col">
        {automatico ? (
          <Automatic
            conjunto={A}
            conjuntoEjemplo={conjuntoEjemplo}
            R={R}
            M={M}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
