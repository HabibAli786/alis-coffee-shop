import type { NextPage } from 'next'
import { foodItem } from '../../../models/item.model'
import ItemCard from '../ItemCard/ItemCard'
import Checkout from '../Checkout/Checkout'
import styles from './Home.module.css'
import { useCartMenu } from '../../../Context/AppProvider'

type HomeProps = {
  items: foodItem[]
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  console.log(props.items)
  const [cartMenu, setCartMenu] = useCartMenu()
  
  return (
    <>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles['menu-items']}>
        {props.items.map((item, key) => 
          <ItemCard
              key={key}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
            />
        )}
      </div>
      {cartMenu &&
        <Checkout />
      }
    </>
  )
}

export default Home