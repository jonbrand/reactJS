import { useState } from 'react';
import './App.css';
import { Content } from './Components/Content/Content';

export function App() {
  const [counter, setCounter] = useState(0);
  // preserva o estado mesmo quando o componente e tirado
  const [showContent, setShowContent] = useState(false);

  function adjustCount(amount) {
    setCounter(currentCount => {
      return currentCount + amount;
    })
  }

  function handleShowContent() {
    setShowContent(currentShowContent => {
      return !currentShowContent
    })
  }

  return (
    <div>
      <h1>Contador</h1>
      <Content showContent={showContent} />
      <p>{counter}</p>
      <button onClick={() => adjustCount(1)}>Incrementar</button>
      &nbsp;
      <button onClick={() => adjustCount(-1)}>Decrementar</button>
      &nbsp;
      <button onClick={handleShowContent}>{showContent ? 'Esconder Conteúdo' : 'Mostrar Conteúdo'}</button>
    </div>
  );
}
