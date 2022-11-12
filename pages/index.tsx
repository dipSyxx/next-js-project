import Head from 'next/head'
import React from 'react'
import Heading from '../components/Heading'
import Socials from '../components/Socials'
import styles from '../styles/Home.module.scss'
import { socials } from './api/data/socials'


// ? Отримання данних...
// виведення запроса прямо на сервер {
//  Отримання данних
export const getStaticProps = async () => {
  try {
    
  // Отримувач API
  //! .env.local
  const response = await fetch(`${process.env.API_HOST}/socials/`)
  //  Трансформація... отриманної відповіді
      const data = await response.json();

      // якщо такої дати немає то повертаєм notFound: true
      if(!data) {
        return {
          notFound: true,
        }
      }

      //  Вертає пропси для компонента
      return {
        props: {socials:data}
      }
    } catch {
      return {
        props:{socials:null}
      }
    }
}

type socialsProp = {
  socials:any
}

export const Home = ({socials}:socialsProp) => {
  return (
    <div className={styles.wrapper__home}>
      <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
    <Heading text='Hello next TSX'/>
    {/* Файл отрісовки списку */}
    <Socials socials={socials}/>
    </div>
    </div>
  )
}

export default Home
