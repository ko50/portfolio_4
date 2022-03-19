import React from "react";

type _Props = {
    children: React.ReactNode,
    expanded: boolean,
}

export const OutsideStar = (props: _Props) => {
    const outerSize = props.expanded ? "w-72 h-72" : "w-32 h-32";
    const innerSize = props.expanded ? "w-72 h-72" : "w-28 h-28";

    return <div className="p-20">
        <div className={"bg-ocean s-clip-star grid items-center justify-items-center " + outerSize}>
            <div className={"bg-star s-clip-star grid items-center justify-items-center " + innerSize}>
                {props.children}
            </div>
        </div>
    </div>;
}
