import Navbar from "./Navbar"
import styles from '../styles/Layout.module.css'
import Header from "./Header"

import Link from 'next/link'


const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Navbar />
      <Header />
      <div className={styles.main}>{children}</div>


    </div>
  )
}

export default Layout