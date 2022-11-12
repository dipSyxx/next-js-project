// ! цей файл відповідає за отримання даних з постороніх API, трансформації отриманих даних
// ! А також отрісовка зовнішніх пунктів а також роутинг пунктів


import React from 'react'
import Head from 'next/head'
import Heading from '../../components/Heading'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

// виведення запроса прямо на сервер {
//  Отримання данних
export const getStaticProps = async () => {
  // Отримувач постів
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
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
        props: {posts:data}
      }
}

type postsProps = {
  posts: any
}

type jsonProps = {
  id: number
  title: string
}

export const Posts = ({posts}:postsProps) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Posts</title>
      </Head>
    <Heading text='Posts list: SSG'/>
    <ul>
      {/* із обєкта постів за допомогою деконструкції витягуєм поля (id, title) */}
      {posts && posts.map(({id, title}:jsonProps) => (
        //?  Отрісовка пунктів
          // Динамічний роутинг 
        <li key={id}>
          {/* При клікі на пост переходить на сторінку по определьному id який вказаний у поста і відрісовує динаміч тайтл */}
          <Link href={`/posts/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Posts
