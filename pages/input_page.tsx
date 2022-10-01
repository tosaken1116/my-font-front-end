import { useRouter } from "next/router";
import { useState } from "react";
import DrawCanvas from "./components/draw_canvas";
import Header from "./components/header";
export default function InputPage() {
  const router = useRouter();
  const [downloadURL1, setDownloadURL1] = useState("");
  const [downloadURL2, setDownloadURL2] = useState("");
  const [downloadURL3, setDownloadURL3] = useState("");
  const [downloadURL4, setDownloadURL4] = useState("");
  const [downloadURL5, setDownloadURL5] = useState("");
  const dammys = [
    {
      character: "あ",
      method: setDownloadURL1,
    },
    {
      character: "い",
      method: setDownloadURL2,
    },
    {
      character: "う",
      method: setDownloadURL3,
    },
    {
      character: "え",
      method: setDownloadURL4,
    },
    {
      character: "お",
      method: setDownloadURL5,
    },
  ];
  const test = (event) => {
    event.preventDefault();
    console.log(downloadURL1);
    console.log(downloadURL2);
    console.log(downloadURL3);
    console.log(downloadURL4);
    console.log(downloadURL5);
  };
  const changeCanvasToImage = (event) => {
    event.preventDefault();
    console.log(downloadURL1);
    console.log(downloadURL2);
    console.log(downloadURL3);
    console.log(downloadURL4);
    console.log(downloadURL5);
    router.push("./input_mail_address");
  };
  return (
    <div className="">
      <Header></Header>
      <div>
        {dammys.map((dammy, index) => (
          <div key={index} className=" m-6 mx-auto w-56 justify-center">
            <DrawCanvas key={index} method={dammy.method}></DrawCanvas>
            <div className="text-center text-lg text-red-500">
              {dammy.character}
            </div>
          </div>
        ))}
      </div>
      <button onClick={test}>testボタン</button>
      <div className="mx-auto w-36 rounded border-2 border-cyan-400 bg-cyan-200 text-center text-black hover:bg-cyan-600 hover:text-white">
        <button onClick={changeCanvasToImage}>データを送信する</button>
      </div>
    </div>
  );
}
