"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import type { Explanation } from "@/types";

const CSR = () => {
  const [data, setData] = useState<Explanation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const data: Explanation = await response.json();
      setData(data);
    };
    // 요청이 있을 때 마다 지속해서 갱신해줍니다.
    // client side rendering이기 때문에, loading에 관련된 state 제어를 통해 사용자에게 알려줌
    fetchData();
  }, []);

  if (!data) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <div>{data.fact}</div>
      <div>{data.length}</div>
    </>
  );
};

export default CSR;
