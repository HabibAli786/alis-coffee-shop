import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { foodItem } from '../models/item.model'
import Home from './Components/Home/Home'

const HomePage: NextPage = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(items)
  return (
    <>
      <Home {...items}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/food`)
  const data: foodItem[] = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { 
    props: { 
      items: data
    } 
  }
}

export default HomePage
