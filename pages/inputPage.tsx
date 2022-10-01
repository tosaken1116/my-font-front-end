import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getCookies } from "../methods/getCookies";
import DrawCanvas from "./components/draw_canvas";
import Header from "./components/header";
import ReportModal from "./components/report_modal";
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
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const changeCanvasToImage = async (event) => {
        event.preventDefault();
        setModalIsOpen(true);

        try {
            const response = await axios.post(
                url + "/api/v1/fonts",
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
    };
    useEffect(() => {
        const cookies = getCookies("accessToken");
        if (cookies == null) {
            router.push("/TopPage");
        }
        console.log(cookies);
    }, []);
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
                    <div
                        key={index}
                        className=" m-12 mx-auto w-56 justify-center"
                    >
                        <DrawCanvas
                            key={index}
                            method={dammy.method}
                        ></DrawCanvas>
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