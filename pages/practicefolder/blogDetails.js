// import React from 'react'
// import { useParams } from 'react-router-dom'
// const blogDetails = () => {
//     const {id}=useParams();
//   return (
//     <div>
//         <h1>Blog Details {id}</h1>
//     </div>
//   )
// }

// export default blogDetails''

// Routes Parameters 


// import { useParams } from "react-router-dom";
//  import useFetch from './useFetch'
// const BlogDetails = () => {
//   const { id=1 } = useParams();

//   const {data:blog, isLoading,error}= useFetch("http://localhost:8000/blogs/"+ id );
//   return (
//     <div className="blog-details">
//       <h2>Blog details - { id }</h2>
//       {isLoading && <div>Loading ...</div>}
//       {error && <div> {error}</div>}
//       {
//           blog && <div>
//               <h1> {blog.title}</h1>
//               <p>{blog.author}</p>
//               </div>
//       }
//     </div>
//   );
// }
 
// export default BlogDetails;
import Link from 'next/link';
import React from 'react'
import Router from 'next/router';
import { useState } from 'react'
const blogDetails = () => {
  const [title,setTitle]= useState('');
  const [body,setBody]=useState('');
  const [isloading,setIsloading]=useState(false);
  const [author,setAuthor]=useState('mario');
const handleSubmit=(e)=>{
e.preventDefault();
const blog={title,body,author};

setIsloading(true);
fetch('http://localhost:8000/blogs',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(blog)
}).then(()=>
console.log('new blog added'));
setIsloading(false);
  }
  const handleClick = ()=>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method:'DELETE'
    }).then(()=>{
      history.push
    })

  }
return (
<div className='form-1' >

  <Link href="/home">
   <b>all blogs </b>
  </Link>
 
        <h1 >ADD a new Blog</h1><form className='form-2'>
        <label> blog Title</label>
        <input 
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required/>
       <label> blog Body</label>
        <input 
        type="text"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        required
        />
       <label> Blog Author</label>
       <select
       value={author}
       onChange={(e)=>setAuthor(e.target.value)}>
        
           <option>mario</option>
           <option >tarun</option>
       </select>
{ !isloading && <button onClick={handleSubmit}>ADD blog</button>}
{isloading&&<button disabled>Adding blog...</button>}
{/* <p>{title}</p>
<p>{body}</p>
<p>{author}</p> */}
</form>
    </div>
  )
}
export default blogDetails;