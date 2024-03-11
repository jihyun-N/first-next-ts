// src>components>rendering>SSR.tsx
import Image from "next/image";
import React from "react";

import type { Explanation } from "@/types";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
    // 요청이 있을 때 마다 지속해서 갱신해줍니다.
    // hydration이 완료되기 전까지의 시간. 즉, TTI(Time To Interactive)가 관건
  });
  const data: Explanation = await response.json();

  return (
    <>
      <div>{data.fact}</div>
      <div>{data.length}</div>
    </>
  );
};

export default SSR;
