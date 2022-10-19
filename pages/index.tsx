import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { getLocalStrage } from "../methods/getCookies";
import Header from "./components/header";
export default function Home() {
    const router = useRouter();
    const logOut = () => {
        localStorage.removeItem("jwt");
        router.push("/topPage");
    };
    useLayoutEffect(() => {
        if (!getLocalStrage("jwt")) {
            router.push("/topPage");
        }
    }, []);
    return (
        <div>
            <Header></Header>

            <div className="mx-auto mt-24 grid w-64 grid-rows-2 text-center">
                <Link href="/inputPage">
                    <a className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                        フォントを作成
                    </a>
                </Link>
                {/* <Link href="/inputPage">
                    <a className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                        みんなのフォントを見る
                    </a>
                </Link> */}
                <button
                    onClick={logOut}
                    className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100"
                >
                    サインアウト
                </button>
            </div>
        </div>
    );
}
