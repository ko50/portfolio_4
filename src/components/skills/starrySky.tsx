import { Consumer } from "utils/context";
import { SkillResource } from "utils/resourceTypes/skills";
import { SkillCard } from "components/skills/skillCard";

export const StarrySky = () => {
    return <div className="flex flex-row flex-wrap w-screen items-center">
        <Consumer>
            {value => (
                value.data.map((resource, i) => (
                    <div key={i} className="p-6 max-w-max">
                        <SkillCard key={i} resource={resource as SkillResource} />
                    </div>
                ))
            )}
        </Consumer>
    </div>;
}
