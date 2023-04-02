import { createContext, useEffect, useState } from "react";
export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState( localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [] );

  useEffect(() => {
    //si ya hay algo en el local storage carrito, lo borro y lo vuelvo a guardar
    localStorage.removeItem("carrito");
    
    localStorage.setItem("carrito", JSON.stringify(itemsCarrito));
  }, [itemsCarrito]);
  
  

  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem) {
      newItem.quantity += quantity;
      setItemsCarrito([...itemsCarrito]);
    } else {
      setItemsCarrito([...itemsCarrito, { item, quantity }]);
    }
  };
  

  const isInCart = (item) => {
    return itemsCarrito.find((e) => e.item.id === item.id);
  };

  const clear = () => {
    setItemsCarrito([]);
  };

  const removeItem = (itemId) => {
    setItemsCarrito(
      itemsCarrito.filter((element) => element.item.id !== itemId)
    );
  };

  const totalProducts = () => {
    const totalProducts = itemsCarrito.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    return totalProducts;
  };

  const getTotal = () => {
    let total = 0;
    itemsCarrito.forEach((e) => (total += e.quantity * e.item.price));
    return total;
  };

  return (
    <GContext.Provider
      value={{
        itemsCarrito,
        addItem,
        clear,
        totalProducts,
        removeItem,
        getTotal,
      }}
    >
      {children}
    </GContext.Provider>
  );
};

export default CartContext;
