import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const { quantityTotal } = useContext(CartContext)
   
    if (quantityTotal() === 0) {
        return (
          <div className='cartWidget'>
            <Link to='/cart'  > 
            
        
                <img src={cart} alt="cart-widget"/> 

            </Link>
          </div>
        );
      }
    return (
      <div className='containerCart'>
        <div className='cartWidget' >
            <Link to='/cart'  > 
            
               
                <img  className="cartImg" src={cart} alt="cart-widget"/> 
                <div className='textCount'>{quantityTotal()}</div>
                
            </Link>
        </div>
        </div>
    )
}

export default CartWidget