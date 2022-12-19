import { useState } from 'react';

export const CounterUseState = () => {
  const [counter, setCounter] = useState(0);

  function handleCounter(){
    setCounter(counter + 1);
  }

  function handleDecrement(){
    setCounter(counter - 1);
  }

  return (
    <div className='App'>
      <h1>Contador</h1>
      <p>{counter}</p>
      <button onClick={handleCounter}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
}