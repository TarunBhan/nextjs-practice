import React from "react";
import Link from "next/link";
const blog1 = ({ blogs, title, handleDelete, son }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <h2>{son} </h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <Link href={`/blogDetails`}>
            <h2>{blog.title}</h2>
            {/* <p>This is my Profile{blog.author}</p> */}
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default blog1;
