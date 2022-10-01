import { useRef, useState } from "react";
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
    console.log(Image);
    const dataURL = (canvasRef.current as pointGroupArray).toDataURL(
      "image/png"
    );
    props.method(() => dataURL);
    // props.method(() => Image);
  };
  const canvasRef = useRef<ReactSignatureCanvas | null>();
  return (
    <div className=" -ml-[20px] h-[272px] w-[272px] bg-white  ">
      <div className=" h-[272px] w-[272px] border-8 border-black">
        <SignatureCanvas
          ref={(ref) => {
            canvasRef.current = ref;
          }}
          penColor="black"
          canvasProps={{ width: 256, height: 256 }}
          backgroundColor="rgba(0,0,0,0)"
          onEnd={() => {
            getImageURL();
          }}
        />
      </div>
    </div>
  );
}
