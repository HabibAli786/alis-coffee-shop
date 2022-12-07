import React, { useContext, useState } from "react"
import { cartItem } from "../models/cartItem.model"

export const CartContext = React.createContext<any>(null)
export const CartMenuContext = React.createContext<any>(false)

export function useCart() {
    return useContext(CartContext)
}

export function useCartMenu() {
  return useContext(CartMenuContext)
}

export default function AppProvider({ children }: any) {
  const [cart, setCart] = useState<cartItem[] | []>([])
  const [cartMenu, setCartMenu] = useState<boolean>(false)

  return ( 
    <CartContext.Provider value={{cart, setCart}}>
      <CartMenuContext.Provider value={{cartMenu, setCartMenu}}>
        {children}
      </CartMenuContext.Provider>
    </CartContext.Provider>
  )
}