import {useState,useEffect} from 'react';

const useFetch =(url) =>{

   const abortCont= new AbortController();

    const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const handleDelete = (id) => {
    const newBlogs = data.filter((currElem) => currElem.id !== id);
    setData(newBlogs);
  };
  // useEffect(() => {
  //   console.log("re-render");
  //   console.log(blogs);
  //   console.log(dependecy);
  // }, [dependecy]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw "Unable to get the server 404";
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsloading(false);
          setError(null);
        })
        .catch((error) => {
          setIsloading(false);
          setError(error.message);
          console.log(error.message);
        });
    }, 1000);
  },[url]);
  return {data,isLoading,error,handleDelete};
}
export default useFetch;