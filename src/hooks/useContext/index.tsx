import React, { useContext } from "react";
import CartContext from "./context";

const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default AppContext;
