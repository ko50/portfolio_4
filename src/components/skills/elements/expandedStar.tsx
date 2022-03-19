import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ExpandedStar = (props: _Props) => {
    const outerSize = "w-[18rem] h-[18rem]";
    const innerSize = "w-[17rem] h-[17rem]";
    const gap = "left-[calc((18rem-17rem)/2)] top-[calc((18rem-17rem)/2)]";

    return <div className={"bg-star clip-star-ex relative " + outerSize}>
        <div className={"bg-white clip-star-ex absolute " + innerSize + " " + gap}>
            {props.children}
        </div>
    </div>;
}
