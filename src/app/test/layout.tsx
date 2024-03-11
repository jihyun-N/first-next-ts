"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    console.log("최초 렌더링시 한 번만 호출");
  }, []);

  return (
    <div className="m-8 p-8 bg-black">
      <h1>테스트 페이지</h1>
      <p>테스트 경로 하위에서의 이동을 확인</p>
      <nav>
        <ul>
          <li
            onClick={() => {
              router.push("/test");
            }}
          >
            {/* <Link href="/test">테스트 페이지</Link> */}
            테스트 페이지
          </li>
          <li
            onClick={() => {
              router.push("/test/1");
            }}
          >
            {/* <Link href="/test/1">테스트 페이지 1</Link> */}
            테스트 페이지 1
          </li>
          <li
            onClick={() => {
              router.push("/test/2");
            }}
          >
            {/* <Link href="/test/2">테스트 페이지 2</Link> */}
            테스트 페이지 2
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default TestLayout;
