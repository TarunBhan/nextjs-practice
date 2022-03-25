import Link from "next/link"
import { useEffect } from "react";
import {useRouter} from "next/router"
const Error = () => {
  const router = useRouter();
  
    
    setTimeout(()=>{
      router.push("/");
    },5000);
  
  return (
   <>
   <h1> 404</h1>
 <Link href="/">
   <a  > <center> Page Not found</center></a>
  </Link> 
  </>
  )
}

export default Error