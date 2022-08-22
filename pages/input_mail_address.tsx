import { useState } from "react";
import Modal from "react-modal";
import Header from "./components/header";
import ReportModal from "./components/report_modal";
export default function InputMailAddress() {
  const [mailAddress, setMailAddress] = useState<string>("");
  const [error, setError] = useState<string>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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
      width: "500px",
      height: "300px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
    },
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleMailAddress = (event) => {
    console.log(event.target.value);
    setMailAddress(event.target.value);
  };
  const submitMailAddress = (event) => {
    event.preventDefault();

    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (!regex.test(mailAddress)) {
      setError("※無効なメールアドレスです");
      setMailAddress("");
    } else {
      setModalIsOpen(true);
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="mt-4 ml-4">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <ReportModal></ReportModal>
        </Modal>
        <div>フォントダウンロードリンクをメールにて送信</div>
        <form onSubmit={submitMailAddress}>
          <input
            type="text"
            className="rounded-xl border-2 border-[#22bb44] py-4 px-8 hover:border-[#55f0e1]"
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
