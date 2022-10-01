import Link from "next/link";
export default function ErrorModal() {
    return (
        <div>
            <div className="text-xl">データの送信に失敗しました</div>
            <div className=" text-xs">時間をおいて再度送信してください</div>
            <div className=" mx-auto my-4 w-48 rounded border-2 border-white p-1 text-center">
                <Link href="./">トップページに戻る</Link>
            </div>
        </div>
    );
}
