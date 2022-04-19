import Link from "next/link";
import Router from "next/router";
import React from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      blogs: data,
    },
  };
};
const blog = ({ blogs }) => {
  return (
    <>
      {blogs.slice(0, 5).map((currElem: any) => {
        return (
          <div key={currElem.id} className="ssr-styles">
            <h2>{currElem.id}</h2>
            <Link href={`/blog/${currElem.id}`}>
              <h3> {currElem.title}</h3>
            </Link>
            <p> {currElem.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default blog;
