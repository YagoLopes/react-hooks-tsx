import React, { useRef } from "react";

function App() {
  //Serve para referenciar a um delemento na DOM
  //Nesse caso estou utilizando ele para dar foco no elemento

  const inputRef = useRef<HTMLInputElement>(null);

  inputRef.current?.focus();

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;
