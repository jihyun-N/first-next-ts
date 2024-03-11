import Image from "next/image";
import React from "react";

import type { Explanation } from "@/types";

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const data: Explanation = await response.json();

  return (
    <>
      <div>{data.fact}</div>
      <div>{data.length}</div>
    </>
  );
};

export default SSG;
