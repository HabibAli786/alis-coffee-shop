import { NextPage } from 'next'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useCart, useCartMenu } from '../../../Context/AppProvider'
import { foodItem } from '../../../models/item.model'
import styles from './Checkout.module.css'

const Checkout: NextPage = () => {
    const [cart, setCart] = useCart()
    const [cartMenu, setCartMenu] = useCartMenu()

    const totalPrice = () => {
        let total = 0
        cart.forEach((item: foodItem) => {
            console.log("item price", item.price)
            total = item.price + total
        })
        console.log("total price " + total)
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
                <h1 className={styles['checkout-items-header']}>Your Items</h1>
                <div className={styles['checkout-items']}>
                    {cart?.map((item: foodItem, key: number) =>
                    <>
                        <p key={key}>{item.title}</p>
                        <p key={key+1}>£{item.price}</p>
                    </>
                    )}
                </div>
                <div className={styles['checkout-items-total']}>
                    <h1>Total Price</h1>
                    <h1 >£{totalPrice()}</h1>
                </div>
            </div>
        </div>
    )
}


export default Checkout