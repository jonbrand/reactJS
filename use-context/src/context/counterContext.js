import { createContext, useState, useEffect } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, seDoubleCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    seDoubleCounter( counter * 2 );
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, setCounter, doubleCounter, increaseCounter }}>
      {children}
    </CounterContext.Provider>
  );
};