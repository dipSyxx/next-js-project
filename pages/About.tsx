import Head from 'next/head'
import React from 'react'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.scss'

export const About = () => {
  return (
    <div className={styles.wrapper}>
        <Head>
            <title>About</title>
        </Head>
        <Heading tag='h1' text='About me:' />
        <Heading tag='h2' text='Hi,my name is Yura im a front-end developer and i teach a NextJs'/>
    </div>
  )
}

export default About
