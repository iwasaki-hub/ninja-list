import Link from "next/link"
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>


      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/coins">Coins</Link>
        <Link href="/ninjas">Ninjas</Link>
        <Link href="/article">Article</Link>
        <Link href="/login">LogIn</Link>
        

      </div>


    </div>
  )
}

export default Navbar