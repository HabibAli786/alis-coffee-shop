import type { NextPage } from 'next'
import Image from 'next/future/image'
import americano from '../../../public/food/americano.png'
import styles from './ItemCard.module.css'

type ItemCardProps = {
  title: string,
  price: number,
  imgSrc: string
}

const ItemCard: NextPage<ItemCardProps> = ({ title, price, imgSrc }) => {
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
            <button className={styles['item-info-button']}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ItemCard