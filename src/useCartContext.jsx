import React, { createContext, useContext, useMemo, useState } from "react";

// Tạo một context
const CartContext = createContext({});

// Sử dụng context provider trong component cha
function CartContextProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);

  const value = useMemo(() => ({ cartProduct, setCartProduct }), [cartProduct]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Sử dụng context trong component con
export function useCartContext() {
  const contextValue = useContext(CartContext);

  return contextValue;
}

export default CartContextProvider;