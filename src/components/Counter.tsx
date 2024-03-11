"use client";

import React from "react";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Counter;
