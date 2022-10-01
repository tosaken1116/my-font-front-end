import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";
import DrawCanvas from "./components/draw_canvas";
import Header from "./components/header";
export default function InputPage() {
  const router = useRouter();
  const cookie = parseCookies();
  const url = "https://edd-myfont-backend.herokuapp.com";
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

  const changeCanvasToImage = async (event) => {
    event.preventDefault();
    console.log("=====================");
    console.log(cookie.AccessToken);
    console.log("=====================");

    try {
      const response = await axios.post(
        // url + "/api/v1/fonts",
        "https://edd-myfont-backend.herokuapp.com/api/v1/fonts/",
        {
          images: [
            {
              character: "あ",
              image_url: downloadURL1,
            },
            {
              character: "い",
              image_url: downloadURL2,
            },
            {
              character: "う",
              image_url: downloadURL3,
            },
            {
              character: "え",
              image_url: downloadURL4,
            },
            {
              character: "お",
              image_url: downloadURL5,
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjU0NzM3MjkuMjUzMDk1LCJ1c2VyX2lkIjoiYTM3MzBiOTQtYzQwOS00ZTNmLWI1ZTQtZTJlMjg5ZWU2ZjZmIn0.MN5t7A5iOw44Ekeh4faiuX8PCccUp-T3pGunZUpgne4",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // router.push("./input_mail_address");
  };
  return (
    <div className="">
      <Header></Header>
      <div>
        {dammys.map((dammy, index) => (
          <div className=" m-12 mx-auto w-56 justify-center">
            <DrawCanvas key={index} method={dammy.method}></DrawCanvas>
            <div className="mt-16 text-center text-lg text-red-500">
              {dammy.character}
            </div>
          </div>
        ))}
      </div>
      <button onClick={changeCanvasToImage}>testボタン</button>
      <div className="mx-auto w-36 rounded border-2 border-cyan-400 bg-cyan-200 text-center text-black hover:bg-cyan-600 hover:text-white">
        <button onClick={changeCanvasToImage}>データを送信する</button>
      </div>
    </div>
  );
}
