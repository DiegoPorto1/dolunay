import {createContext, useState, useEffect} from "react"

export const CartContext = createContext ({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])
    console.log (cart )

    /* el total funciona bien, no tocar */
    const total = () => {
    const total = cart.reduce(
      (total,item) => total + item.quantity * item.price, 0
    );
    return total
};
    /*quantityTotal no se toca ya anda*/
    const quantityTotal = () => {
          const quantityTotal = cart.reduce(
            (total,item) => total + item.quantity, 0
          );
          return quantityTotal
    };
    
    


    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart (prev => [...prev, {...item,quantity}]);
        } else {
            console.error ('El producto ya fue agregado')
        }
    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart =() => {
        setCart ([])
    }
    

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }
    

    return (
        <CartContext.Provider value={{cart , addItem, removeItem, clearCart,quantityTotal, total}}>
            {children}
        </CartContext.Provider>
    )

}