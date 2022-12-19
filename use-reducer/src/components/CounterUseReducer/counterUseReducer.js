import { useReducer } from "react";

export const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // armazena vários estados

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
  )
}