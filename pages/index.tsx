import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookies } from "../methods/getCookies";
import Header from "./components/header";
export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const cookies = getCookies("accessToken");
        if (cookies == null) {
            router.push("/topPage");
        }
        console.log(cookies);
    }, []);
    return (
        <div>
            <Header></Header>

            <div className="mx-auto mt-24 grid w-64 grid-rows-2 text-center">
                <div className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                    <Link href="/inputPage">フォントを作成</Link>
                </div>
                <div className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                    <Link href="/inputPage">みんなのフォントを見る</Link>
                </div>
            </div>
        </div>
    );
}
