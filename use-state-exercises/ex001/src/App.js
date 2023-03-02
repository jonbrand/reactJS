// Crie um contador onde e possível incrementar o valor e também decrementar
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    let increment = setCounter(counter + 1);
    return increment;
  }

  function handleCounterDecrement() {
    let increment = setCounter(counter - 1);
    return increment;
  }

  return (
    <div>
      <h1>Contador</h1>
      <span>{counter}</span>
      <div>
        <button onClick={handleCounterIncrement}>Incrementar</button>
        <button onClick={handleCounterDecrement}>Decrementar</button>
      </div>
    </div>
  );
}

export default App;
