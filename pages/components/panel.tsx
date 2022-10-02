export function RightPanel() {
    return (
        <div>
            <div className="absolute top-0 bottom-0 left-0 h-[256px] w-[256px]  bg-gradient-to-b from-red-700 to-red-800"></div>
            <div className="  absolute  top-[108px] left-0  z-10 h-[32px] w-[256px] bg-gradient-to-b from-yellow-200 to-yellow-300"></div>
            <div className="  absolute   top-0 left-[108px] z-10 h-[256px] w-[32px] bg-gradient-to-r from-yellow-200 to-yellow-300"></div>
        </div>
    );
}
export function LeftPanel() {
    return (
        <div>
            <div className="absolute top-0 bottom-0 left-0 h-[256px] w-[256px] transform-cpu bg-gradient-to-b from-red-600 to-red-700"></div>
            <div className="  absolute  top-[108px] left-0  z-10 h-[32px] w-[256px] bg-gradient-to-b from-yellow-200 to-yellow-300"></div>
            <div className="  absolute   top-0 left-[108px] z-10 h-[256px] w-[32px] bg-gradient-to-l from-yellow-200 to-yellow-300"></div>
        </div>
    );
}
