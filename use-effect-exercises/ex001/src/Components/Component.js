import { useEffect } from "react";

export function Component() {
  // componentWillMount
  useEffect(() => {
    document.title = "UseEffect!!!";
    // componentWillUnmount
    return () => {
      document.title = "React Hooks"
    }
  }, []);
  
  return (
    <div><h1>Mostrar Conteúdo</h1></div>
  )
}