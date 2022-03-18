import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ExpandedStar = (props: _Props) => {
    return <div className="bg-star clip-star-ex w-[20rem] h-[20rem] relative">
        <div className="bg-white clip-star-ex w-[19rem] h-[19rem] absolute left-2 top-2">
            {props.children}
        </div>
    </div>;
}
