import { useState } from "react";

import { WorkResource } from "utils/resourceTypes/works";
import { A } from "components/common/utils/a";
import { HoverDetector } from "components/common/utils/hoverDetector";
import { HoveredText } from "components/works/mol/hoveredText";
import { DefaultCard } from "components/works/mol/defaultCard";
import { HoveredCover } from "components/works/mol/hoveredCover";

type _Props = {
    resource: WorkResource,
}

export const WorkCard = (props: _Props) => {
    const [hovered, setHovered] = useState(false);

    return <A href={props.resource.link}>
        <HoverDetector dispatcher={setHovered}>
            <div className="relative">
                <HoveredCover hovered={hovered} />
                <HoveredText resource={props.resource} hovered={hovered} />
                <DefaultCard resource={props.resource} />
            </div>
        </HoverDetector>
    </A>;
}
