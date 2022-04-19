import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const bg_data = () => {
  const [data, setData] = useState([]);
  const fetchPost = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  //console.log(data);
  return (
    <div>
      <button onClick={fetchPost}> Click</button>
      {console.log(data[0]?.title)}
      <h1>{data[0]?.title}</h1>
      {data &&
        data.map((user) => {
          return (
            <div id={user.id}>
              <p>{user?.title}</p>
            </div>
          );
        })}

      {/* {data.map((currElem) => {
        return (
          <div key={currElem.id} className="ssr-styles">
            <h2>{currElem.id}</h2>

            <h3> {currElem.title}</h3>

            <p> {currElem.body}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default bg_data;
