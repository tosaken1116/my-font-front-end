import { useRouter } from "next/router";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { getLocalStrage } from "../methods/getCookies";
import PresentBox from "./components/presentBox";

export default function DownloadFont() {
    const [onClick, setOnClick] = useState(false);
    const router = useRouter();
    const query = router.query;
    const download = useCallback(async () => {
        setOnClick(true);
        await sleep(1);
        await sleep(1);

        setOnClick(false);
    }, []);
    function sleep(sec: number) {
        return new Promise((resolve) => setTimeout(resolve, sec * 1000));
    }
    useLayoutEffect(() => {
        if (!getLocalStrage("jwt")) {
            router.push("/topPage");
        }
    }, []);
    useEffect(()=>{
        if(router.isReady){
            console.log(query.user_id);
        }
    },[query,router])
    return (
        <div className=" animate-bounce shadow-black drop-shadow-xl">
            <div className=" flex scale-50 items-center justify-center ">
                <a
                    onClick={download}
                    href={`https://res.cloudinary.com/dfkqamtlv/raw/upload/v1665228908/${query.user_id}.otf`}
                >
                    <PresentBox status={onClick}></PresentBox>
                </a>
            </div>
        </div>
    );
}
