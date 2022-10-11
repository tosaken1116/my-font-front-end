type PropsType = {
    propsHover: boolean;
};
export default function LeftPanel(props: PropsType) {
    return (
        <div>
            <div className="absolute top-0 bottom-0 left-0 h-[256px] w-[256px] rounded-bl-xl bg-gradient-to-bl from-red-600 to-red-700"></div>
            <div
                className={
                    "  absolute  top-[112px] left-0  z-10 h-[32px] border-t-2 border-b-2 border-yellow-100 bg-gradient-to-b  from-yellow-200 to-yellow-300 shadow-sm shadow-black " +
                    (props.propsHover
                        ? "w-0  delay-300  duration-300"
                        : " w-[256px] duration-300")
                }
            >
                <div
                    className={
                        "h-[28px] w-[256px]  border-b-2 border-t-2 border-dashed border-yellow-500 " +
                        (props.propsHover
                            ? "w-0  delay-300  duration-300"
                            : " w-[256px] duration-300")
                    }
                ></div>
            </div>
            <div
                className={
                    "   absolute   top-0 left-[112px] z-10 w-[32px] border-l-2 border-r-2 border-yellow-100 bg-gradient-to-l from-yellow-200  to-yellow-300 shadow-sm shadow-black " +
                    (props.propsHover
                        ? "h-0  duration-300"
                        : "h-[256px]  delay-300  duration-300")
                }
            >
                <div
                    className={
                        "h-[256px] w-[28px]  border-l-2 border-r-2 border-dashed border-yellow-500 " +
                        (props.propsHover
                            ? "h-0 duration-300"
                            : "h-[256px]  delay-300  duration-300")
                    }
                ></div>
            </div>
        </div>
    );
}
