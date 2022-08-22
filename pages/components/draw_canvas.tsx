import { useRef, useState } from "react";
import pointGroupArray, {
  default as ReactSignatureCanvas,
  default as SignatureCanvas,
} from "react-signature-canvas";

type propsType = {
  png: string;
};

export default function DrawCanvas(props: propsType) {
  const [Image, setImage] = useState<string>();
  const canvasRef = useRef<ReactSignatureCanvas | null>();
  return (
    <div className=" h-[216px] w-[216px] bg-white  ">
      {/* <div className=" h-[516px] w-[516px] border-8 border-yellow-400">
        <div className=" z-5 absolute bottom-2 left-2">
          <div className=" grid grid-cols-2">
            <div className=" grid grid-rows-2">
              <div className=" h-[250px] w-[250px] border-2 border-dashed"></div>
              <div className=" h-[250px] w-[250px] border-2 border-dashed"></div>
            </div>
            <div className="grid grid-rows-2">
              <div className=" h-[250px] w-[250px] border-2 border-dashed "></div>
              <div className=" h-[250px] w-[250px] border-2 border-dashed"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" h-[216px] w-[216px] border-8 border-black">
        <SignatureCanvas
          ref={(ref) => {
            canvasRef.current = ref;
          }}
          penColor="black"
          canvasProps={{ width: 200, height: 200 }}
          backgroundColor="rgba(0,0,0,0)"
          onEnd={() => {
            setImage((canvasRef.current as pointGroupArray).toDataURL());
          }}
        />
      </div>
    </div>
  );
}
