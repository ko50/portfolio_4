import React from "react";

type _Props = {
    children: React.ReactNode,
}

export const ShrinkedStar = (props: _Props) => {
    return <div className="p-20">
        <div className="bg-ocean s-clip-star w-32 h-32 grid items-center justify-items-center">
            <div className="bg-star s-clip-star w-28 h-28">
                {props.children}
            </div>
        </div>
    </div>;
}
