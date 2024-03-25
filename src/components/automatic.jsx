import { getRandomArbitrary } from "./logic";

export default function generarConjuntoAutomatico({
  A = [],
  conjuntoEjemplo = [],
}) {
  //Funcion para generar un conjunto aleatorio

  function generarConjunto() {
    let n = getRandomArbitrary(4, 7);
    for (let i = 1; i <= n; i++) {
      A.push(conjuntoEjemplo[Math.floor(Math.random() * 12)]);
    }
  }
  generarConjunto();
  console.log({ A });
  return (
    <>
      A = [
      {A.map((item, id) => (
        <span key={id}>{item};</span>
      ))}
      ]
    </>
  );
}
