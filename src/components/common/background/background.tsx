import React from "react";

type _Props = {
    children: React.ReactNode;
}

export function Background(props: _Props) {
    return <div className="bg-sky w-100 min-h-screen">
        {props.children}
    </div>;
}
