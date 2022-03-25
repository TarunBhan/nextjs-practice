import Link from "next/link";
import styles from "../styles/index.module.css";
const index =() =>{
return (
  <div className={styles.imgbg}>
  <h1 className="style.main_heading"> Shiva is Everything</h1>
  <Link href='/about'>
    <a>Ram ji</a>
    </Link>
   
  </div>
);
};
export default index;