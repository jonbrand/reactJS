/* Crie um componente que aparece quando clicado em um botao, e desaparece quando clicado em 
outro botao */
import { useState } from "react";

import { HiddenComponent } from "./Components/HiddenComponent";

function App() {
  const [showContent, setShowContent] = useState(false);

  function handleShowContent() {
    setShowContent(currentShowContent => {
      return !currentShowContent;
    });
  }

  return (
    <div>
      <h2>Componente Oculto</h2>
      <HiddenComponent showContent={showContent}/>
      <div>
        <button onClick={handleShowContent}>{showContent ? "Esconder Conteúdo" : "Mostrar Conteúdo"}</button>
      </div>
    </div>
  );
}

export default App;
