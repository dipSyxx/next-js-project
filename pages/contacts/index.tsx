// ! цей файл відповідає за отримання даних з постороніх API, трансформації отриманих даних
// ! А також отрісовка зовнішніх пунктів а також роутинг пунктів

import { GetStaticProps } from 'next'
import React from 'react'
import Heading from '../../components/Heading'
import styles from '../../styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link'

// виведення запроса прямо на сервер {
//  Отримання данних
export const getStaticProps:GetStaticProps = async () => {
  // Отримувач користувачів
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
        props: {contacts:data}
      }
}

type contactsProps = {
  contacts: any
}

type jsonProps = {
  id: number
  name: string
  email:string
  phone: number
}

export const Contacts = ({contacts}:contactsProps) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='Contacts list:SSR'/>
      <ul>
        {/* із обєкта контактів за допомогою деконструкції витягуєм поля (id,name,email,phone) */}
        {contacts && contacts.map(({id,name,email,phone}:jsonProps) => (
          // додаєм логіку вивода...
          // <li key={id}><strong>{name}</strong> ({email}) (Phone: {phone})</li>

          //?  Отрісовка пунктів
          // Динамічний роутинг 
          <li key={id}>
            {/* При клікі на контакт переходить на сторінку по определьному id який вказаний у користувача */}
            <Link href={`/contacts/${id}`}>(Name:{name}) (Email: {email}) (Phone: {phone})</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contacts
