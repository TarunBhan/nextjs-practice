import { title } from "process";
import { useEffect, useState } from "react";
import Blogss from "./blog";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
    handleDelete,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error ? <p>{error} </p> : isLoading && <div>Loading ...</div>}

      {blogs && (
        <Blogss
          title="all Blogs!!"
          blogs={blogs}
          son={"thakur"}
          handleDelete={handleDelete}
        />
      )}
      {/* <button onClick={() => setDependecy("true")}>Check</button> */}
    </div>
  );
};
export default Home;
