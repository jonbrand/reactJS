import { useState } from 'react';
import './App.css';
import { Content } from './Components/Content/Content';

export function App() {
  const [counter, setCounter] = useState(0);
  const [showContent, setShowContent] = useState(false);

  function handleCounter() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter(counter - 1);
  }

  function handleShowContent() {
    setShowContent(!showContent)
  }

  return (
    <div>
      <h1>Contador</h1>
      <Content showContent={showContent} />
      <p>{counter}</p>
      <button onClick={handleCounter}>Incrementar</button>
      &nbsp;
      <button onClick={handleCounterDecrement}>Decrementar</button>
      &nbsp;
      <button onClick={handleShowContent}>{showContent ? 'Esconder Conteúdo' : 'Mostrar Conteúdo'}</button>
    </div>
  );
}
