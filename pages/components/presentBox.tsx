import { LeftPanel, RightPanel } from "./panel";
import TopPanel from "./topPanel";
export default function PresentBox() {
    return (
        <div className="">
            <div className="flex flex-col">
                <div className=" absolute top-[139px] right-[502px] scale-x-140 scale-y-51">
                    <div className=" origin-center rotate-45">
                        <TopPanel></TopPanel>
                    </div>
                </div>
                <div className="flex ">
                    <div className=" mt-0.5 skew-y-20">
                        <LeftPanel></LeftPanel>
                    </div>
                    <div className="mt-24 ml-64 -skew-y-20">
                        <RightPanel></RightPanel>
                    </div>
                </div>
                {/* <div className="  absolute ml-60 -skew-y-12  transform-cpu bg-black p-24"></div>
                <div className="  absolute z-10 ml-60  mt-20 w-[192px] -skew-y-12 transform-cpu bg-yellow-200">
                    　
                </div>
                <div className="  absolute z-10 ml-80  h-[192px] -skew-y-12 transform-cpu bg-yellow-200"></div>
                　
            </div>
            <div>
                <div className="  absolute skew-y-12  transform-cpu bg-black p-24"></div>
                <div className="  absolute z-10  mt-20 w-[192px] skew-y-12 transform-cpu bg-yellow-200">
                    　
                </div>
                <div className="  ml-2- absolute z-10 ml-20 h-[192px] skew-y-12 transform-cpu bg-yellow-200">
                    　
                </div> */}
            </div>
            　
            {/* <div className="before:content-['Not_Hovering'] hover:before:content-['Hovering']"></div> */}
        </div>
    );
}
