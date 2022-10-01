import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import ReportModal from "./components/report_modal";

import DrawCanvas from "./components/draw_canvas";
import Header from "./components/header";
export default function InputPage() {
  const router = useRouter();
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
    },

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "400px",
      height: "300px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const changeCanvasToImage = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };
  return (
    <div className="">
      <Header></Header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <ReportModal></ReportModal>
      </Modal>
      <div>
        {dammys.map((dammy, index) => (
          <div className=" m-6 mx-auto w-56 justify-center">
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
