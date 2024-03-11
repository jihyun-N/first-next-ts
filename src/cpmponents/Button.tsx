"use client";

import React from "react";

const CustomButton = () => {
  return (
    <button
      onClick={() => {
        alert("안냐세요");
      }}
    >
      클릭
    </button>
  );
};

export default CustomButton;
