import Navbar from "./Navbar"
import styles from '../styles/Layout.module.css'
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.main}>{children}</div>


    </div>
  )
}

export default Layout