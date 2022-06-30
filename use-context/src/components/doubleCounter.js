import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export function DoubleCounter() {
  const { doubleCounter } = useContext(CounterContext);

  return (
    <h1>Dobro do Contador: {doubleCounter}</h1>
  );
};