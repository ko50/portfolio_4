type _Props = {
    name: string,
    description: string,
    tags: string[],
    dark?: boolean,
}

export const Information = (props: _Props) => {
    const dark = props.dark || false;
    const mainText = dark ? "text-potato" : "text-white";
    const subText = dark ? "text-sky" : "text-grey";

    return <div className="flex items-start pt-4">
        <span className="text-star text-4xl">★</span>
        <span className="w-1" />
        <div className="block">
            <div className={"font-zcool text-4xl " + mainText}>
                {props.name}
                <span className={"text-base font-dosis " + subText}> ...{props.tags.join()}</span>
            </div>
            <div className={"font-maru text-base " + mainText}>{props.description}</div>
        </div>
    </div>;
}
