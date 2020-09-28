//Esse hook pertime modificar a referncia passada para um component nosso

// Ele funciona quase que como uma passagem de props ao contrario de filho para pai

import React, { useRef, useImperativeHandle } from "react";
import Form, { FormRef } from "./Form";

const AppuseImperativeHandle: React.FC = () => {
  const formRef = useRef<FormRef>(null);

  function handleSubmit() {
    //Função subimit do component agora está disponivel na ref
    formRef.current?.submit();
  }

  return <Form ref={formRef} />;
};

export default AppuseImperativeHandle;
