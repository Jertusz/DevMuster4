import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Test.css";

export const Test = ({ p }) => {
  const [count, setCount] = useState(0);
  const bob = { name: "bob", age: 10 };
  //   const name = bob.name;
  const { name } = bob;
  const arr = [1, 2, 3, 4];
  const [first, second, ...rest] = arr;
  console.log(name, first, second, rest);

  console.log({ ...bob });

  useEffect(async () => {
    console.log("mount");
    // const res = await fetch("");
    return () => {
      console.log("unmount");
    };
    // Dependencies
  }, []);

  return (
    <div className="counter">
      <h1>{p}</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Box m={5}></Box>
    </div>
  );
};
