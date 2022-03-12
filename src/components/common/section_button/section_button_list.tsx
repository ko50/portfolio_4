import { SectionButton } from "components/common/section_button/section_button"

type _Props = {
    names: string[]
}

export function SectionButtonList(props: _Props) {
    return <div className="p-1">
        <div className="w-100 flex justify-center">
            {props.names.map((name: string) => <SectionButton name={name} />)}
        </div>
    </div>;
}
