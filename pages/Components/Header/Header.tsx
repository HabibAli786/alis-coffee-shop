import { NextPage } from 'next'
import { BiCoffeeTogo } from 'react-icons/bi'
import { BsBasket } from 'react-icons/bs'
import { useCart, useCartMenu } from '../../../Context/AppProvider'

import styles from './Header.module.css'

const Header: NextPage = () => {
  const [cart, setCart] = useCart()
  const [cartMenu, setCartMenu] = useCartMenu()

  console.log(cart?.length)
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
                  <span className={styles['nav-cart-num']}>{cart?.length}</span>
                }
              </li>
            </ul>
          </div>
        </nav>
    )
}


export default Header