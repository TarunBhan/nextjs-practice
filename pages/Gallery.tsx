import React from "react";
// import { GetStaticProps } from "next";
const Gallery=({images})=>{
    {
        
        
    }
    return <>
    <h1>help</h1>
    </>
}
export  async function  getStaticProps(){
    const result =await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,{
        headers:{
            Authorization:`Basic${Buffer.from(process.env.CLOUDINARY_API_KEY +':'+ process.env.CLOUDINARY_SECRET_KEY).toString('base64')}`
        }
        }).then( res =>res.json())
        console.log('result',result);
    //   const {resources}= result;    
    //     const images= resources.map((resources:any)=>{
    //         const {width,height}=resources;
    //        return {
    //         id:resources.assest_id,
    //         title:resources.public_id,
    //         image:resources.secure_url,  
    //         width,
    //         height
    //         }
        
        return{
            props:{
          
            }
        }
}
     

export default Gallery;