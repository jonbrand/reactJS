import { useRef } from 'react';

export function RefAsCounter() {
  const counterRef = useRef(0);

  function increaseCounter() {
    counterRef.current = counterRef.current + 1;
  }

  function handleClickCounter(){
    alert('O botao foi clicado ' + counterRef.current + ' vezes'); 
  }
  return (
    <>
      <h1>
        Contador de cliques
      </h1>
      <button onClick={increaseCounter}>Clicar</button>
      &nbsp;
      <button onClick={handleClickCounter}>Número de cliques</button>
    </>
  );
}