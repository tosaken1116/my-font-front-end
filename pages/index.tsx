import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="mx-auto mt-24 grid w-64 grid-rows-2 text-center">
        <div className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
          <Link href="/input_page">フォントを作成</Link>
        </div>
        <div className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
          <Link href="/input_page">みんなのフォントを見る</Link>
        </div>
      </div>
    </div>
  );
}