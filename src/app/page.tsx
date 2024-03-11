import CustomButton from "@/cpmponents/Button";
import { Metadata } from "next";

//src > app > page.tsx
export const metadata: Metadata = {
  title: "홈 제목",
  description: "This is awesome Website",
};

export default function Home() {
  return (
    <div className="p-8">
      하이 리액트.. 아니 Next.js에요~
      <section>
        <h1>제목</h1>
        <p>내용</p>
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
          <li>항목 3</li>
        </ul>
      </section>
      <CustomButton />
    </div>
  );
}
