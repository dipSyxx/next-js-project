import Head from "next/head";
import styles from "../styles/Socials.module.scss";

type socialsProp = {
    socials:any
}

type socialsInfoProps = {
    id:number
    icon:any 
    path:string 
}

// socials це масив
const Socials = ({ socials }:socialsProp) => {

    // проверка... якщо дані не знайдені то error:404
  if (!socials) {
    return null;
  }

  return (
    <>
    <Head>
        {/* підключення іконок */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
        {/* Генеруєм список з масива і метода map... */}
      {socials && socials.map(({ id, icon, path }:socialsInfoProps) => (
        // Створення списку
        <li key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            {/* формується клас для іконки */}
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Socials;