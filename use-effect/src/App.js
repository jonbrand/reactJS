import { useEffect, useState } from 'react';
import './App.css';
import { SpecialComponent } from './Components/SpecialComponent/SpecialComponent';

function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  // componentDidMount
  useEffect(() => {
    document.title = 'React Hooks | useEffect';
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    alert('Valor do contador: ' + counter)
  }, [counter]);

  function handleCounter(){
    setCounter(counter + 1);
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{counter}</p>
      { showComponent && <SpecialComponent />}
      <button onClick={handleCounter}>Incrementar</button>
      &nbsp;
      <button onClick={handleComponentVisibility}>{showComponent ? 'Esconder Componente' : 'Exibir Componente'}</button>
    </div>
  );
}

export default App;
