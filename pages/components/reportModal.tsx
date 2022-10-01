import Link from "next/link";
export default function ReportModal() {
  return (
    <div>
      <div className="text-xl">
        フォントのダウンロードリンクを入力されたメールアドレスに送信します
      </div>
      <div className=" text-xs">※これには時間がかかる可能性があります</div>
      <div className=" mx-auto my-4 w-48 rounded border-2 border-white p-1 text-center">
        <Link href="./">トップページに戻る</Link>
      </div>
    </div>
  );
}
