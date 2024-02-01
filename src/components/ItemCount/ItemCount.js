import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => 
{
    const [quantity, setQuantity] = useState (initial)
    const increment = ()=> {
        if (quantity < stock){
            setQuantity (quantity +1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity (quantity - 1)
        }
    }


return (
    <div className="containerbtn">
        <div className="btncount">
            <button  className="btn"onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button className="btn" onClick={increment}>+</button>
        </div>
        <div>
            <button className="btnC" onClick={()=> onAdd(quantity)} disabled={!stock}> 
            agregar al carrito
            </button>
        </div>
    </div>
)}

export default ItemCount