import Link from "next/link";
import React from "react";
import styles from "../styles/index.module.css";
export const  getStaticProps = async()=>
{
  const res= await fetch("https://jsonplaceholder.typicode.com/todos");
  const data= await res.json();
 
  return {
    props:{
      data,
    },
  };
};


const index =({data}) =>{
  return(
  <>{
  data.map((currElem)=>{
  return (
    <>
  <div className={styles.imgbg}>
  {/* <h1 className="style.main_heading"> Shiva is Everything</h1> */}

   <h1>{currElem.id}</h1>
   <p>{currElem.title}</p>
 </div>
 </>
  );
})
  }
  </>
  )
}
export default index