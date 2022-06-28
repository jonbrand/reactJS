import { useEffect } from "react"

export function SpecialComponent (){
  useEffect(() => {
    document.title = 'Componente visível!';

    //componentWillUnmout
    return () => {
      document.title = 'React Hooks | useEffect';
    }
  }, []);

  return(
   <>
      <div>
        <h3>Confira o título da página</h3>
      </div>
   </>
  )
}