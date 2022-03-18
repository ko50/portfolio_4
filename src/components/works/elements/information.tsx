type _Props = {
    name: string,
    description: string,
    tags: string[],
}

export const Information = (props: _Props) => {
    return <div className="flex items-start pt-4">
        <span className="text-star text-4xl">★</span>
        <span className="w-1" />
        <div className="block">
            <div className="font-zcool text-white text-4xl">
                {props.name}
                <span className="text-grey text-base font-dosis"> ...{props.tags.join()}</span>
            </div>
            <div className="text-white font-maru text-base">{props.description}</div>
        </div>
    </div>;
}
