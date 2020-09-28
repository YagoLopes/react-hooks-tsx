import React, { useReducer } from "react";

interface Cart {
  products: string[];
  shippingValue?: number;
}
type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const App: React.FC = () => {
  // Adicionando tipagem no useReducer

  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        //pesquisar sobre uma libe chamada immer

        case "ADD_PRODUCT":
          return {
            ...state,
            product: [...state.products, "Produto novo"],
          };

        default:
          return state;
      }
    },
    { products: ["asd"], shippingValue: 0 }
  );

  return <ul></ul>;
};

export default App;
