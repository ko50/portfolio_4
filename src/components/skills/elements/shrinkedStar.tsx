import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ShrinkedStar = (props: _Props) => {
    return <div className="bg-ocean clip-star-ex w-[10rem] h-[10rem] relative">
        <div className="bg-star clip-star-ex w-[8.5rem] h-[8.5rem] absolute left-3 top-3">
            {props.children}
        </div>
    </div>;
}
