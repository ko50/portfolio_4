import React from "react";

type _Props = {
    href: string,
    children: React.ReactNode,
}

export const A = (props: _Props) => {
    return <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
    </a>;
}
