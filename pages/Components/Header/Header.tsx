import { BiCoffeeTogo } from 'react-icons/bi'
import { BsBasket } from 'react-icons/bs'

import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <BiCoffeeTogo color='green' size={100}/>
            <h1>Ali&apos;s Coffee Shop</h1>
          </div>
          
          <div>
            <ul>
                <li className={styles['nav-item']}> Basket <BsBasket size={50} /></li>
            </ul>
          </div>
        </nav>
    )
}


export default Header