import Link from "next/link";
import { useEffect, useState } from "react";

export default function topPage() {
    const [onhover, setOnHover] = useState<number>(1);
    const classNameArray = [
        "text-red-400",
        "text-orange-400",
        "text-yellow-400",
        "text-lime-400",
        "text-green-400",
        "text-emerald-400",
        "text-cyan-400",
        "text-sky-400",
        "text-violet-400",
        "text-pink-400",
    ];
    const [click, setClick] = useState(false);
    const [stringToExist, setsSringToExist] = useState(true);
    const fontArray = [" font-reggae", " font-kosugi", " font-zenkaku"];
    useEffect(() => {
        setsSringToExist(false);
    }, [click]);
    return (
        <div className="font-hatimaru">
            <div>
                <div className=" text-center text-8xl ">
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        w
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        e
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        l
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        c
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        o
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        m
                    </span>
                    <span className=" transform motion-safe:scale-110 motion-safe:duration-300 motion-safe:hover:font-black">
                        e
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setClick(true)}
                        className={
                            click
                                ? "animate-ping text-center  text-8xl text-[#ffffff00] duration-500 "
                                : " text-center  text-8xl"
                        }
                    >
                        <div>to</div>
                    </button>
                </div>

                <div className=" text-center text-8xl">
                    <span className=" mr-4 text-gray-400">My</span>
                    <button onClick={() => setOnHover(onhover + 1)}>
                        <span
                            className={
                                classNameArray[(onhover + 1) % 10] +
                                fontArray[(onhover + 1) % 3]
                            }
                        >
                            F
                        </span>
                    </button>
                    <button onClick={() => setOnHover(onhover + 1)}>
                        <span
                            className={
                                classNameArray[(onhover + 2) % 10] +
                                fontArray[(onhover + 2) % 3]
                            }
                        >
                            o
                        </span>
                    </button>
                    <button onClick={() => setOnHover(onhover + 1)}>
                        <span
                            className={
                                classNameArray[(onhover + 3) % 10] +
                                fontArray[(onhover + 3) % 3]
                            }
                        >
                            n
                        </span>
                    </button>
                    <button onClick={() => setOnHover(onhover + 1)}>
                        <span
                            className={
                                classNameArray[(onhover + 4) % 10] +
                                fontArray[(onhover + 4) % 3]
                            }
                        >
                            t
                        </span>
                    </button>
                </div>
            </div>
            <div className="mx-auto mt-24 grid w-64 grid-rows-2 text-center">
                <Link href="/signIn">
                    <a className="m-3 transform rounded-full border-2 border-[#923188] bg-gradient-to-b from-[#e25dd5] to-[#eec7fb51] p-4 hover:animate-pulse hover:from-[#ffdef6] motion-safe:hover:scale-110 motion-safe:hover:border-[#2231bb] motion-safe:hover:duration-500">
                        サインイン
                    </a>
                </Link>
                <Link href="/signUp">
                    <a className="m-3 transform rounded-full border-2 border-[#923188]  bg-gradient-to-b from-[#e25dd5] to-[#eec7fb51] p-4 hover:animate-pulse hover:from-[#ffdef6] motion-safe:hover:scale-110 motion-safe:hover:border-[#2231bb] motion-safe:hover:duration-500">
                        サインアップ
                    </a>
                </Link>
            </div>
        </div>
    );
}
