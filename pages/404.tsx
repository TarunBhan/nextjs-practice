import Link from "next/link"
//import {Html,center} from 'next/document'
import { useEffect } from "react";
import {useRouter} from "next/router"

interface Post{}

const Error = () => {
  const router = useRouter();
  setTimeout(()=>{
      router.push("/");
    },5000);
  return (
   <>
   <h1 className="center1"> 404</h1>
 <Link href="/">
   <a  > 
     <div className="center1"> Page Not found</div>
   </a>
  </Link> 
  </>
  )
}

export default Error;