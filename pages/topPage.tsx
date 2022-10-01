import Link from "next/link";
export default function topPage() {
    return (
        <div>
            <div>
                <div className=" text-center text-8xl">welcome</div>
                <div className=" text-center text-8xl">to</div>
                <div className=" text-center text-8xl">MyFont</div>
            </div>
            <div className="mx-auto mt-24 grid w-64 grid-rows-2 text-center">
                <Link href="/signIn">
                    <a className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                        サインイン
                    </a>
                </Link>
                <Link href="/signUp">
                    <a className="m-3 rounded-full border-2 border-[#22bb44] bg-gradient-to-b from-[#0a621d] to-[#15692751] p-4 hover:scale-110 hover:transform hover:border-[#2231bb] hover:from-[#0a1f62] hover:duration-500 peer-hover:scale-100">
                        サインアップ
                    </a>
                </Link>
            </div>
        </div>
    );
}
