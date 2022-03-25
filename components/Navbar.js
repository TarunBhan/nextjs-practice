import Link from 'next/link'

function Navbar() {
  return (
  <>
  <center>¸
   <nav className='n1'>
      <ul className="menu-bar">
        <Link  href="./pages/">
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
         </ul>
    </nav>
    </center>
  </>
  )
}

export default Navbar