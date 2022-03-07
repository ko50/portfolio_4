type _Props = {
    children: JSX.Element;
}

export function Background(props: _Props) {
    return <div className="bg-sky w-100 h-screen">
        {props.children}
    </div>;
}
