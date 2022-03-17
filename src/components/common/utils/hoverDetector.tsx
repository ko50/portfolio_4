import React, { useState } from "react";

type _Props = {
    children: React.ReactNode,
    dispatcher: Function,
}

export const HoverDetector = (props: _Props) => {
    return <div
        onMouseEnter={() => props.dispatcher(true)}
        onMouseLeave={() => props.dispatcher(false)}
    >
        {props.children}
    </div>;
}
