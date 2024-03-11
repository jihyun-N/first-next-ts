import Counter from "@/components/Counter";
import { Metadata } from "next";

//src > app > page.tsx
export const metadata: Metadata = {
  title: "홈 제목",
  description: "This is awesome Website",
};

export default function Home() {
  return (
    <div className="p-8">
      <Counter />
    </div>
  );
}
