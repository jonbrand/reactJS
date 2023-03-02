import { useEffect, useState } from "react";
import { Component } from "./Components/Component";

// Mudar o titulo da Pagina quando o componente App renderizar
// Exiba um alert sempre que o counter for alterado
function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
   // componentWillUpdate
  useEffect(() => {
    alert("Valor do counter " + counter)
  }, [counter]);

  useEffect(() => {
    document.title = "React Hooks";
  }, [])

  function increaseCounter () {
    setCounter(counter + 1)
  }

  function decrementCounter () {
    setCounter(counter - 1)
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <h1>Contador</h1>
      {showComponent && <Component />}
      <br />
      <span>{counter}</span>
      <div>
        <button onClick={increaseCounter}>Incrementar</button>
        &nbsp;
        <button onClick={decrementCounter}>Decrementar</button>
        &nbsp;
        <button onClick={handleComponentVisibility}>{showComponent ? "Esconder Conteúdo" : "Mostrar Conteúdo"}</button>
      </div>
    </div>
  );
}

export default App;
