import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ExpandedStar = (props: _Props) => {
    return <div className="bg-star clip-star-ex grid w-72 h-72 items-center justify-items-center">
        <div className="bg-white clip-star-ex w-[17rem] h-[17rem]">
            {props.children}
        </div>
    </div>;
}
