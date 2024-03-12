import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      {/* 보여질 부분 */}
      <nav>
        <Link href="/csr">CSR</Link>
        <Link href="/isr">ISR</Link>
        <Link href="/ssg">SSG</Link>
        <Link href="/ssr">SSR</Link>
      </nav>
    </div>
  );
};

export default layout;
