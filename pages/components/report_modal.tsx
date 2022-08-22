import Link from "next/link";
export default function ReportModal() {
  return (
    <div>
      <div className="text-xl">
        フォントのダウンロードリンクを入力されたメールアドレスに送信します
      </div>
      <div className=" text-xs">※これには時間がかかる可能性があります</div>
      <div className=" text-center">
        <Link href="./">トップページに戻る</Link>
      </div>
    </div>
  );
}
