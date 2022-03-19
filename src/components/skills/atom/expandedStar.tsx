import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ExpandedStar = (props: _Props) => {
    return <div className="bg-star s-clip-star grid w-72 h-72 items-center justify-items-center">
        <div className="bg-white s-clip-star w-[17rem] h-[17rem]">
            {props.children}
        </div>
    </div>;
}
