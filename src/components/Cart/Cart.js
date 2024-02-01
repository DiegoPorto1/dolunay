import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink, Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';



const Cart = () => {
  const { cart, clearCart, total,quantityTotal } = useContext(CartContext);
 
  const generateCartText = () => {
    let cartText = "Hola me gustaria hacer un pedido de:\n";

    for (const item of cart) {
      cartText += `\nProducto: ${item.name}, Cantidad: ${item.quantity}, Precio: $${item.price}, Subtotal: ${item.price*item.quantity}`;
    }

    cartText += `\n\nTotal a pagar: $${total()}`;

    return cartText;
  };
  const handleSendWhatsApp = () => {
    const cartText = generateCartText();
    const encodedText = encodeURIComponent(cartText);
    const phoneNumber = "541169819094"; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  if (quantityTotal() === 0) {
    return (
      <div className="emptycart">
        <h1>No hay items en el carrito</h1>
        <Link to='/'>Productos</Link>
      </div>
    );
  }

  return (
    <div className="containercart">
      <div className="Cart">
        {cart.map(p => (
          <CartItem
            key={p.id}
            itemId={p.id}
            quantity={p.quantity}
            price={p.price}
            name={p.name}
            {...p}
          />
        ))}
      </div>
      <div className="containertotal">
        <h3>Total: ${total()}</h3>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
        <button className="button" onClick={handleSendWhatsApp}>
          Enviar por WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Cart;