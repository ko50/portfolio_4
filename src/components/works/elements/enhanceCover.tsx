type _Props = {
    hovered: boolean,
}

export const EnhanceCover = (props: _Props) => {
    if (!props.hovered) return <div></div>;

    return <div className="w-full h-40 absolute bottom-0">
        <div className="w-full border-b-[3px] border-white " />
        <div className="pb-0.5" />
        <div className="w-full border-b-4 border-white " />
        <div className="pb-px" />
        <div className="w-full h-[150px] rounded-b  bg-white" />
    </div>;
}
