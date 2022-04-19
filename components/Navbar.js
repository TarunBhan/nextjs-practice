import Link from 'next/link'
import styles from "../styles/index.module.css";
function Navbar() {
  return (
  <div className={styles.navbar}>
  
   <nav className='styles.n1'>
      <ul className="menu-bar">
        <Link  href="/">
          <a >Home</a>
        </Link >
        <Link href="/about">
          <a >about</a>
        </Link >
        <Link href="/contact">
          <a >contacts</a>
        </Link >
        <Link href="/product">
          <a >product</a>
        </Link >
        <Link href="/blogDetails">
          <a >Add Blog</a>
        </Link >
         </ul>
    </nav>
    
  </div>
  )
}

export default Navbar