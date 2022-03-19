import { Information } from "components/works/atom/information";
import { WorkResource } from "utils/resourceTypes/works";

type _Props = {
    resource: WorkResource,
    hovered: boolean,
}

export const HoveredText = (props: _Props) => {
    const animation = props.hovered
        ? "animate-w-hover-txt-appear"
        : "animate-w-hover-txt-hide";

    return <div className={"flex items-start absolute bottom-0 p-5 " + animation}>
        <Information
            name={props.resource.name}
            description={props.resource.description}
            tags={props.resource.tags}
            dark={true}
        />
    </div>;
}
