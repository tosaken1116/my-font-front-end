import { useRouter } from "next/router";
import DownloadFont from "../downloadFont";

export default function Index() {
    const router = useRouter();
    const { post_id } = router.query;
    if (!router.isReady) {
        return null;
    }
    console.log(post_id);
    return (
        <div>
            <DownloadFont font_id={post_id}></DownloadFont>
        </div>
    );
}
