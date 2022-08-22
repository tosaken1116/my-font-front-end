import DrawCanvas from "./components/draw_canvas";
export default function InputPage() {
  const dammys = [
    {
      character: "1",
      png: "",
    },
    {
      character: "2",
      png: "",
    },
    {
      character: "3",
      png: "",
    },
    {
      character: "4",
      png: "",
    },
    {
      character: "5",
      png: "",
    },
  ];
  return (
    <div className="">
      <div>
        {dammys.map((dammy, index) => (
          <div className=" m-6 mx-auto w-56 justify-center">
            <DrawCanvas key={index} png={dammy.png}></DrawCanvas>
            <div className="text-center text-lg text-red-500">
              {dammy.character}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
