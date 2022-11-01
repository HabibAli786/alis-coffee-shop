import React, { useContext, useState } from "react"
import { foodItem } from "../models/item.model"

export const CartContext = React.createContext<foodItem[] | null>(null)
export const CartUpdateContext = React.createContext<any>(null)
export const CartMenuContext = React.createContext<any>(false)

export function useCart() {
    return useContext(CartContext)
}

export function useCartUpdate() {
    return useContext(CartUpdateContext)
}

export function useCartMenu() {
  return useContext(CartMenuContext)
}

export default function AppProvider({ children }: any) {
  const [cart, setCart] = useState<foodItem[] | []>([])
  const [cartMenu, setCartMenu] = useState<boolean>(false)

  return ( 
    <CartContext.Provider value={cart}>
        <CartUpdateContext.Provider value={setCart}>
          <CartMenuContext.Provider value={[cartMenu, setCartMenu]}>
            {children}
          </CartMenuContext.Provider>
        </CartUpdateContext.Provider>
    </CartContext.Provider>
  )
}