import { useRef, useState } from "react";
import { FakeModal } from "./FakeModal";

 export function RefInteractingWithDom() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();

  function showFakeModal() {
    setShowModal(true);
  }

  return (
    <div>
      <h1>useRef para interagir com elementos DOM</h1>
      <button onClick={showFakeModal}>Clique aqui para interagir</button>
      {showModal && <FakeModal forwardedRef={inputRef} setShowModal={setShowModal} />}
    </div>
  )
 }