import { NextPage } from 'next'
import { BiCoffeeTogo } from 'react-icons/bi'
import { BsBasket } from 'react-icons/bs'

import styles from './Header.module.css'

const Header: NextPage = () => {
    return (
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <BiCoffeeTogo color='green' size={100}/>
            <h1>Ali&apos;s Coffee Shop</h1>
          </div>
          
          <div>
            <ul className={styles['nav-items']}>
              <li className={styles['nav-item']}> Basket</li>
              <li className={styles['nav-item']}><BsBasket size={50} /><span className={styles['nav-cart-num']}>1</span></li>
            </ul>
          </div>
        </nav>
    )
}


export default Header