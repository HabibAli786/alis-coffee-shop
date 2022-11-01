import React, { useContext, useState } from "react"
import { foodItem } from "../models/item.model"

export const CartContext = React.createContext<foodItem[] | null>(null)
export const CartUpdateContext = React.createContext<any>(null)

export function useCart() {
    return useContext(CartContext)
}

export function useCartUpdate() {
    return useContext(CartUpdateContext)
}

export default function AppProvider({ children }: any) {
  const [cart, setCart] = useState<foodItem[] | []>([])

  function addItemToCart(item: foodItem) {
    setCart([...cart, item])
  }

  return ( 
    <CartContext.Provider value={cart}>
        <CartUpdateContext.Provider value={addItemToCart}>
            {children}
        </CartUpdateContext.Provider>
    </CartContext.Provider>
  )
}