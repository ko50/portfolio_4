import React from "react";

type _Props = {
    children: React.ReactNode,
    expanded: boolean,
}

export const InsideStar = (props: _Props) => {
    const path = props.expanded ? "s-clip-star" : "s-clip-decagon";
    const offset = props.expanded ? "" : "mt-4";

    const outerColor = props.expanded ? "bg-star" : "bg-2nd-mag-star ";
    const outerSize = props.expanded ? "w-72 h-72" : "w-14 h-14";
    const innerSize = props.expanded ? "w-[17rem] h-[17rem]" : "w-11 h-11";

    return <div className={"grid items-center justify-items-center " + path + " " + outerColor + " " + outerSize + " " + offset}>
        <div className={"bg-white grid items-center justify-items-center " + path + " " + innerSize}>
            {props.children}
        </div>
    </div>;
}
