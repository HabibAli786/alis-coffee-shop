import type { NextPage } from 'next'
import ItemCard from '../ItemCard/ItemCard'
import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles['menu-items']}>
        <ItemCard
          title='Americano'
          price={2.99}
          imgSrc='americano'
        />
      </div>
    </>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home