import './App.css';
import { DoubleCounter } from './components/doubleCounter';
import { Counter } from './components/counter';
import { CounterContextProvider } from './context/counterContext';

function App() {
  return (
    <CounterContextProvider>
      <Counter />
      <DoubleCounter />
    </CounterContextProvider>
  );
};

export default App;
