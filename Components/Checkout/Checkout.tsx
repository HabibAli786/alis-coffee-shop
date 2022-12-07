import { NextPage } from 'next'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useCart, useCartMenu } from '../../Context/AppProvider'
import { cartItem } from '../../models/cartItem.model'
import styles from './Checkout.module.css'

const Checkout: NextPage = () => {
    const { cart } = useCart()
    const { setCartMenu } = useCartMenu()

    const totalPrice = () => {
        console.log(cart)
        let total = 0
        cart.forEach((item: cartItem) => {
            total = (item.price * item.qty) + total
        })
        return Math.round(total * 100) / 100
    }
  
    return (
        <div className={styles['checkout-container']}>
            <div className={styles['checkout-header-container']}>
                <h1>Checkout</h1>
                <IoCloseCircleOutline 
                onClick={() => setCartMenu(false)}
                className={styles['checkout-close']} 
                color='red' 
                size={100} />
            </div>

            <div className={styles['checkout-items-container']}>
                <div className={styles['checkout-items-header']}>
                    <h1>Item</h1>
                    <h1>Qty</h1>
                    <h1>Price</h1>
                </div>
                <div className={styles['checkout-items']}>
                    {cart?.map((item: cartItem, index: any) =>
                    <>
                        <p key={index}>{item.title}</p>
                        <p key={index+1}>{item.qty}</p>
                        <p key={index+2}>£{item.price}</p>
                    </>
                    )}
                </div>
                <div className={styles['checkout-items-total']}>
                    <h1>Total Price</h1>
                    <h1>£{totalPrice()}</h1>
                </div>
            </div>
        </div>
    )
}


export default Checkout