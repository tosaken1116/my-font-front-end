import { useEffect, useRef, useState } from "react";
import pointGroupArray, {
    default as ReactSignatureCanvas,
    default as SignatureCanvas,
} from "react-signature-canvas";

type propsType = {
    method: any;
};

export default function DrawCanvas(props: propsType) {
    const [Image, setImage] = useState<string>();
    const getImageURL = () => {
        setImage((canvasRef.current as pointGroupArray).toDataURL("image/png"));
    };
    const canvasRef = useRef<ReactSignatureCanvas | null>();
    useEffect(() => {
        setImage((canvasRef.current as pointGroupArray).toDataURL("image/png"));
        const dataURL = (canvasRef.current as pointGroupArray).toDataURL(
            "image/png"
        );
        props.method(dataURL);
    }, [Image]);
    return (
        <div className=" -ml-[20px] h-[272px] w-[272px] bg-white  ">
            <div className=" h-[272px] w-[272px] border-8 border-black">
                <div className=" -z-1 pointer-events-none absolute -mt-1 -ml-1 flex flex-row">
                    <div className="flex flex-col">
                        <div className=" border-2 border-dotted border-black p-16 "></div>
                        <div className=" border-2 border-dotted border-black p-16 "></div>
                    </div>
                    <div className="flex flex-col">
                        <div className=" border-2 border-dotted border-black p-16 "></div>
                        <div className=" border-2 border-dotted border-black p-16 "></div>
                    </div>
                </div>
                <div className="-z-10">
                    <SignatureCanvas
                        className="bg-[#ffffff00]"
                        ref={(ref) => {
                            canvasRef.current = ref;
                        }}
                        penColor="black"
                        canvasProps={{ width: 256, height: 256 }}
                        // backgroundColor="rgba(0,0,0,0)"
                        onEnd={() => {
                            getImageURL();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
