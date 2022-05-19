import Image from 'next/image';
import react, { useEffect, useState } from 'react';
import pic from "   /new.webp";
import styled from 'styled-components'
import { buildUrl } from 'cloudinary-build-url';
const Tag = () => {


    const url: any = buildUrl('cld-sample', {
        cloud: {
            cloudName: 'dh6erdera'
        },
        transformations : {
            effect: 'blur:1000',
            quality:1
        }
    })
    const urlblured:any =buildUrl('cld-sample',{
        cloud:{
            cloudName:'dh6erdera'
        },
        
    })

    const [image,setImage]=useState(urlblured);
    useEffect(()=>{
        setTimeout(()=>{
    setImage(url);
        },2000)
    },[])
    return <>
        <h1>
            Cloudinary Images
        </h1>

        <Image src="/new3.jpeg" height="700px" width="700px" />
        <Image src="https://res.cloudinary.com/demo/video/upload/c_scale,h_320/b_blurred:400:15,c_pad,h_320,w_480/e_volume:mute/e_accelerate:100/cld_rubiks_guy.mp4" height="700px" width="600px" />
        <Image src={url} 
        height="700px" 
        width="600px" 
        alt="0"
   
         />
        {image && <Image src={image} alt="12" height="760px" width="700px" />}

    </>
}
export default Tag;
