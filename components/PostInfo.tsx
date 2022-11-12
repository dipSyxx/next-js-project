//! Рендер подробної інфи про користувача
//? Цей файл витягає інформацію про користувача і відображає її на екрані

import Heading from "./Heading";

type postProps = {
  post: any
}

export const PostInfo = ({ post }:postProps) => {
  // Витягає інформацію контакта за допомогою деструктивності
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
    {/* отрісовка відповіді на екран */}
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;
