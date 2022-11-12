// [id].tsx динамічний роутинг

// ! Цей файл відповідє за рендер даних а також за отримання отрісовки і виведення на екран отриманрої інформації

import { GetServerSideProps } from 'next'
import React from 'react'
import ContactInfo from '../../components/ContactInfo'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

//!-----------------------SSR-Сервер Сайт Рендерінг------------------------
// виведення запроса прямо на сервер {
//  Отримання данних
export const getServerSideProps:GetServerSideProps = async (context:any) => {
  const {id} = context.params
  // Отримувач конкретного id користувачів
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
        props: {contact:data}
      }
}

type contactProps = {
  contact: any
}

export const Contact = ({contact}:contactProps) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Contact</title>
      </Head>
      {/* Отрісовка інформації */}
      <ContactInfo  contact={contact}/>
    </div>
  )
}

export default Contact
