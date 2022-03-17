import { Consumer } from "utils/context";
import { WorkResource } from "utils/resourceTypes/works";
import { WorkCard } from "components/works/workCard"

export function WorkCardList() {
    return <div className="flex flex-col items-center">
        <Consumer>
            {value => (
                value.data.map((resource, i) => (
                    <div key={i} className="p-6 max-w-max">
                        <WorkCard key={i} resource={resource as WorkResource} />
                    </div>
                ))
            )}
        </Consumer>
    </div>;
}
