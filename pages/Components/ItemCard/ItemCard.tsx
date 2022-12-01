import type { NextPage } from 'next'
import Image from 'next/future/image'
import { useCart } from '../../../Context/AppProvider'
import { cartItem } from '../../../models/cartItem.model'
import { foodItem } from '../../../models/item.model'
import styles from './ItemCard.module.css'

const ItemCard: NextPage<foodItem> = ({ title, price, imgSrc }) => {
  const [cart, setCart] = useCart()

  const handleAddCart = () => {
    // setCartMenu(true)
    let qty = 1
    if(cart.length === 0) {
      setCart((value: []) => [...value, { title, price, qty: qty }])
    } else {
      // Instead of forEach filter the array to find a matching title if non exist then create new item in the array
      const matchingItem = cart.find((item: foodItem) => item.title === title)
      if(matchingItem) {
        console.log("Found matching item", title)

        const newCart = cart.map((item: cartItem) => {
          if(item.title === title) {
            return {...item, qty: item.qty + 1}
          }
        })

        setCart(newCart)
        return true
      }

      setCart((value: []) => [...value, { title, price, qty: qty }])
    }
  }
  
  return (
    <>
      <div className={styles['item-card']}>
        <div className={styles['item-image-container']}>
          <Image
            className={styles['item-image']}
            src={`/food/${imgSrc}.png`}
            width={200}
            height={200}
            alt='menu-item'
          />
        </div>
        <div className={styles['item-info-container']}>
            <h1 className={styles['item-info-title']}>{title}</h1>
            <p className={styles['item-info-price']}>£{price}</p>
            <button className={styles['item-info-button']} onClick={handleAddCart}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ItemCard