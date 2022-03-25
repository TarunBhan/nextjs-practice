import Link from 'next/link'
import Image from 'next/image'
import pic from "../components/about.jpeg";
import styles from"../styles/index.module.css"
const aboutPage = ()=>{
  return(
        <><center>
      <Image src={pic}
      alt="picture of the developer"
      width="460px"
      height="400px"
      
      />
      <h1 className={styles.main_heading}> Tarun Bhan SDE</h1>
      </center>
<p className={styles.para}> 
Velit sit sit labore exercitation cupidatat enim nisi Lorem dolore labore pariatur ad ullamco. Nulla id ex nisi tempor non fugiat cillum reprehenderit proident ut esse. Eiusmod cupidatat reprehenderit enim ut ex ipsum aliqua. Voluptate ut tempor enim irure cupidatat consectetur est reprehenderit. Amet enim commodo dolore nostrud qui ex. Commodo enim non duis dolor velit aliqua incididunt aliquip magna eiusmod enim non labore.
</p>



{/* <Link href="/">
    <a>Back to Home</a>
    </Link> */}
</>
 )
}

export default aboutPage
