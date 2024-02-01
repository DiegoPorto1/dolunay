import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartitem.css"

const CartItem = ({ quantity, price, name, itemId }) => {
  const { removeItem , quantityPrice } = useContext(CartContext);
  
  const handleRemoveItem = () => {
    removeItem(itemId);
  };
  

  return (
    <div className="cartItem">
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Valor: ${price}</p>
      <p>Subtotal: ${price*quantity}</p>
      <button onClick={handleRemoveItem}>Eliminar</button>
    </div>
  );
};

export default CartItem;