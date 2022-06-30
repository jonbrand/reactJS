import { useEffect } from "react";

export function FakeModal({ forwardedRef, setShowModal }) {
  function closeFakeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    forwardedRef.current?.focus();
  }, [forwardedRef]);

  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <br />
      <input ref={forwardedRef} id="email" type="email" />
      &nbsp;
      <button onClick={closeFakeModal}>Fechar</button>
    </div>
  )
}