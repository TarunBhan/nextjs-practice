import React from 'react'
import router from 'next/router'
export default function product({products}) {
  return (
  <> 
    <h1> These are some of the Products Im Selling Hope You will like it</h1>
    {
    products.map((currElem) => {
      return (
        <div key={currElem.id}>
          <div className='product-section'>
<h2> {currElem.id} . {currElem.title}|{currElem.description}</h2>

<img src={currElem.img1} alt="1" width="400" height="400"/>
      </div>  </div>
      )
    })}
    </>
  )
}

export async function getServerSideProps(){
  const res=await fetch('http://localhost:8000/product')
  const data=await res.json();
  return{
    props:{
products:data,
    },
  };
};
