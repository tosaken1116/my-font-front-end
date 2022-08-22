import { useState } from "react";
import Header from "./components/header";

export default function InputMailAddress() {
  const [mailAddress, setMailAddress] = useState<string>();
  const [error, setError] = useState<string>();
  const handleMailAddress = (event) => {
    setMailAddress(event.target.values);
  };
  const submitMailAddress = (event) => {
    console.log("=============");

    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    event.preventDefault();
    if (!regex.test(mailAddress)) {
      setError("※無効なメールアドレスです");
      setMailAddress("");
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="mt-4 ml-4">
        <div>フォントダウンロードリンクをメールにて送信</div>
        <form onSubmit={submitMailAddress}>
          <input
            className="rounded-xl border-2 border-[#22bb44] py-4 px-8 hover:border-[#55f0e1]"
            type="text"
            placeholder="username@example.com"
            value={mailAddress}
            onChange={handleMailAddress}
          />
          <button
            className=" ml-4 rounded-xl border-2 border-gray-200 bg-gray-400 py-3 px-6 hover:scale-110 hover:transform hover:border-gray-200 hover:bg-gray-700 hover:duration-200"
            type="submit"
          >
            送信
          </button>
        </form>
        <div className={error == "" ? "" : "text-red-500"}>{error}</div>
      </div>
    </div>
  );
}
