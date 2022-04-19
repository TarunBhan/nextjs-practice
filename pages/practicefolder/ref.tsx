import React, { useState, useRef, useEffect } from "react";

const ref = () => {
  const [name, setName] = useState("");
  const prev = useRef("");

  useEffect(() => {
    prev.current = name;
  }, [name]);
  return (
    <div>
      <input
        ref={prev}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1> this is my{name}</h1>
      <h2>my name is used to this {prev.current}</h2>
    </div>
  );
};

export default ref;
