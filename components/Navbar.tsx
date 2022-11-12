import React from 'react'
import Link from 'next/link' //next js навігація
import Image from 'next/image' //next js optimize img
import styles from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router'

type NavProps = {
  id: number
  title: string
  path: any
}

//  Масиви навігації
const navigation: NavProps[] = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
  { id: 4, title: 'About', path: '/About' },
];

export const Navbar = () => {
  const {pathname} = useRouter();

  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
          {/* Image */}
            <Image src="/favicon.ico" width={60} height={60} alt="NextJS" />
        </div>
        <div className={styles.links}>
          {/*!dynamic navigation! */}
          {navigation.map(({id,title,path}) => (
            // при натискані на силку вона стає активною і підсвічується (синтакис)className={pathname === path ? styles.active : undefined}
            <Link key={id} href={path} className={pathname === path ? styles.active : undefined}> 
              {title}
              </Link>
            
          ))}
        </div>
    </nav>
  )
}

export default Navbar