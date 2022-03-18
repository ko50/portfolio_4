type _Props = {
    name: string,
    description: string,
    tags: string[],
    hovered: boolean,
}

export const HoveredText = (props: _Props) => {
    if (!props.hovered) return <div></div>;

    return <div className="flex items-start absolute bottom-0 p-5">
        <span className="text-star text-4xl">★</span>
        <span className="w-1" />
        <div className="block">
            <div className="font-zcool text-potato text-4xl">
                {props.name}
                <span className="text-sky text-base font-dosis"> ...{props.tags.join()}</span>
            </div>
            <div className="text-potato font-maru text-base">{props.description}</div>
        </div>
    </div>;
}
