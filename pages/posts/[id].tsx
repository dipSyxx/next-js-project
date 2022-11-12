// [id].tsx динамічний роутинг

// ! Цей файл відповідє за рендер даних а також за отримання отрісовки і виведення на екран отриманрої інформації

import Head from 'next/head'
import React from 'react'
import PostInfo from '../../components/PostInfo'
import styles from '../../styles/Home.module.scss'

type IdProps = {
  id:number
}

// !----------------------------SSG-Static Site Generation-------------------------------
// виведення запроса прямо на сервер {
//  Отримання данних
export const getStaticPaths = async () => {
  // Отримувач постів
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //  Трансформація... отриманної відповіді
      const data = await response.json();

      // Формування масиву шляхів
  const paths = data.map(({id}:IdProps) => ({
    params: {id: id.toString()},
  }));

  // 404 error
  return {
    paths,
    fallback: false,
  }
}

//? Наповнювач контента для SSG
// виведення запроса прямо на сервер {
//  Отримання данних
export const getStaticProps = async (context:any) => {
  // Витягаєм id з params
  const {id} = context.params;
  // Отримувач конкретного id поста 
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
        props: {post:data}
      }
}


type postProps = {
  post: any
}

export const Post = ({post}:postProps) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Contact page</title>
      </Head>
      {/* Отрісовка отриманої інформації */}
      <PostInfo post={post}/>
    </div>
  )
}

export default Post
