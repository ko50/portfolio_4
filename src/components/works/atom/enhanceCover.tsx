type _Props = {
    hovered: boolean,
}

export const EnhanceCover = (props: _Props) => {
    const animation = props.hovered
        ? "animate-w-hover-enhance"
        : "animate-w-hover-disenhance";

    return <div className={"w-full h-full origin-bottom " + animation}>
        <div className="w-full border-b-[3px] border-white " />
        <div className="pb-0.5" />
        <div className="w-full border-b-4 border-white " />
        <div className="pb-px" />
        <div className="w-full h-[150px] rounded-b  bg-white" />
    </div>;
}
