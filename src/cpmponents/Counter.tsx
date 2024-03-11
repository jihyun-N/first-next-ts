"use client";

import React from "react";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Counter;
