import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
} from "react";

// import { Container } from './styles';

// Tem que mudar o React.FC

interface FormProps {
  initialDate?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {
  function submit() {
    alert("Submit");
  }
  //Agora sim afunção submite está disponivel para ref
  useImperativeHandle(ref, () => ({
    submit,
  }));

  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default forwardRef(Form);
