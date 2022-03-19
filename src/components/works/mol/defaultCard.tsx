import { WorkResource } from "utils/resourceTypes/works"
import { Information } from "components/works/atom/information";
import { Screenshot } from "components/works/atom/screenshot";

type _Props = {
    resource: WorkResource,
}

export const DefaultCard = (props: _Props) => {
    return <div className="bg-ocean rounded p-5 max-w-2xl">
        <Screenshot screenshot={props.resource.screenshot} />
        <Information
            name={props.resource.name}
            description={props.resource.description}
            tags={props.resource.tags}
        />
    </div>;
}
