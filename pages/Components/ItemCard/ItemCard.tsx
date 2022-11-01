import type { NextPage } from 'next'
import Image from 'next/future/image'
import { useCartUpdate } from '../../../Context/AppProvider'
import { foodItem } from '../../../models/item.model'
import styles from './ItemCard.module.css'

type ItemCardProps = {
  title: string,
  price: number,
  imgSrc: string
}

const ItemCard: NextPage<foodItem> = ({ title, price, imgSrc }) => {
  const addToCart = useCartUpdate()

  const handleAddCart = () => {
    addToCart((value: foodItem[] | []) => [...value, { title, price, imgSrc }])
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