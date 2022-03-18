import { useState } from "react";

import { HoverDetector } from "components/common/utils/hoverDetector";
import { SkillResource } from "utils/resourceTypes/skills";
import { ExpandedStar } from "components/skills/elements/expandedStar";
import { ShrinkedStar } from "components/skills/elements/shrinkedStar";

type _Props = {
    resource: SkillResource,
}

export const SkillCard = (props: _Props) => {
    const [hovered, setHovered] = useState(false);

    if (hovered)
        return <HoverDetector dispatcher={setHovered}>
            <ExpandedStar>
            </ExpandedStar>
        </HoverDetector>;

    return <HoverDetector dispatcher={setHovered}>
        <ShrinkedStar>
        </ShrinkedStar>
    </HoverDetector>;
}
