import { useRouter } from "next/router"


// const pagesNo = () => {
//     const router=useRouter();
//     const pageNumber=router.query.pagesNo;

//   return (
//     <>
//         <h1>
//             this is url {pageNumber}
//         </h1>
//     </>
//   );
// };

// export default pagesNo;

   export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
 
    

  const paths = data.map((curElem) => {
    return {
      params: {
        pagesNo: curElem.id.toString(),
      },
    };
  });


return{
paths,
fallback: false,
};
};
   export const getStaticProps = async(context)=>{
  const id = context.params.pagesNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};


const myData = ({data}) => {
  const {id,title,body}=data;
  return (
    <div  className="ssr-styles">
  <h1> {id}
  </h1>
  <h2> {title}</h2>
  <p>{body}</p>
    </div>
  )
}

export  default myData

