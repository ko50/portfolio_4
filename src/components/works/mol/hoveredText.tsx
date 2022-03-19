import { Information } from "components/works/atom/information";
import { WorkResource } from "utils/resourceTypes/works";

type _Props = {
    resource: WorkResource,
    hovered: boolean,
}

export const HoveredText = (props: _Props) => {
    if (!props.hovered) return <div></div>;

    return <div className="flex items-start absolute bottom-0 p-5">
        <Information
            name={props.resource.name}
            description={props.resource.description}
            tags={props.resource.tags}
            dark={true}
        />
    </div>;
}
