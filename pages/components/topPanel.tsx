export default function TopPanel() {
    return (
        <div className="">
            <div className="absolute top-0 bottom-0 left-0 h-[256px] w-[256px]  bg-gradient-to-t from-red-500 to-red-700"></div>
            <div className="  absolute  top-[108px] left-0  z-10 h-[32px] w-[256px] bg-gradient-to-t from-yellow-200 to-yellow-300"></div>
            <div className="  absolute   top-0 left-[108px] z-10 h-[256px] w-[32px] bg-gradient-to-l from-yellow-200 to-yellow-300"></div>
        </div>
    );
}
