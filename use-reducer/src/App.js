import './App.css';
import { CounterUseState } from './components/CounterUseState/counterUseState';
import { CounterUseReducer } from './components/CounterUseReducer/counterUseReducer';

function App() {

  return (
   <>
      <div className='App'>
        <CounterUseState />
        <CounterUseReducer />
      </div>
   </>
  );
}

export default App;
