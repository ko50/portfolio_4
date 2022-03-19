import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ShrinkedStar = (props: _Props) => {
    return <div className="p-20">
        <div className="bg-ocean clip-star-ex w-[8rem] h-[8rem] relative">
            <div className="bg-star clip-star-ex w-[7rem] h-[7rem] absolute left-2 top-2">
                {props.children}
            </div>
        </div>
    </div>;
}
