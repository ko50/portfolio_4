type _Props = {
    name: string,
}

export function SectionButton(props: _Props) {
    return <div className="px-1.5 py-2">
        <div className="bg-ocean px-2 py-1.5 rounded drop-shadow-lg">
            <div className="text-3xl text-star font-dosis">
                {props.name}
            </div>
        </div>
    </div>;
}
