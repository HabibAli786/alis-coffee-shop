import { NextPage } from 'next'
import { BiCoffeeTogo } from 'react-icons/bi'
import { BsBasket } from 'react-icons/bs'
import { useCart, useCartMenu } from '../../../Context/AppProvider'
import { cartItem } from '../../../models/cartItem.model'

import styles from './Header.module.css'

const Header: NextPage = () => {
  const { cart }= useCart()
  const { setCartMenu } = useCartMenu()

  const calTotalItems = () => {
    let total = 0

    cart.forEach((item: cartItem) => {
      total = item.qty + total
    })

    return total
  }
  
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <BiCoffeeTogo color='green' size={100}/>
        <h1>Ali&apos;s Coffee Shop</h1>
      </div>
      
      <div>
        <ul className={styles['nav-items']}>
          <li className={styles['nav-item']} onClick={() => setCartMenu(true)}>Basket</li>
          <li className={styles['nav-item']}>
            <BsBasket size={50} />
              {cart?.length !== 0 &&
                <span className={styles['nav-cart-num']}>{calTotalItems()}</span>
              }
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Header