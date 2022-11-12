import React from 'react'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.scss'

export const Error = () => {
  const router = useRouter();

  //при введені неправильної силки через три секнди нас повертає назад до головної сторінки
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error:404</title>
      </Head>
        <Heading text='Errro:404'/>
        <Heading tag='h2' text='Something going wrong...' />
    </div>
  )
}

export default Error
