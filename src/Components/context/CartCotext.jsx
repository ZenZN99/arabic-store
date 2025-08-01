import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();
export default function CartProvider({children}) {

    const [cartItem , setCartItem] = useState(() => {
        const saveToCart = localStorage.getItem('cartIems')
        return saveToCart ? JSON.parse(saveToCart) : [];
    });

        const [favItems , setFavItems] = useState(() => {
        const saveToFav = localStorage.getItem('favoriteItems')
        return saveToFav ? JSON.parse(saveToFav) : [];
    });

    useEffect(() => {
      localStorage.setItem('favoriteItems' , JSON.stringify(favItems))
    },[favItems])

    const addToFav = (item) => {
      setFavItems((prevItems) => [...prevItems , item])
    }

    const removeItemFav = (id) => {
      setFavItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const QuantitativeIncrease = (id) => {
      setCartItem(prevItems => prevItems.map(item => 
        item.id === id ? {...item , quantity: item.quantity + 1} : item
      ))
    }

    const QuantitativeDecrease  = (id) => {
      setCartItem(prevItems => prevItems.map(item => 
        item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
      ))
    }

      const removeItem = (id) => {
      setCartItem(prevItems => prevItems.filter((item) => item.id !== id))
    }

    

    const addToCart = (item) => {
        setCartItem((prevItems) => [...prevItems , {...item , quantity: 1}])
    }

  

    useEffect(() => {
        localStorage.setItem('cartIems' , JSON.stringify(cartItem))
    } , [cartItem])

    

  return (
    <CartContext.Provider value={{addToCart , cartItem , removeItem , QuantitativeIncrease , QuantitativeDecrease , addToFav , favItems , removeItemFav}}>
      {children}
    </CartContext.Provider>
  )
}
