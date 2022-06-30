import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export function Counter() {
  const { counter, increaseCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increaseCounter}> Aumentar Contador!</button>
    </div>
  );
};