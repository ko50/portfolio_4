import { useState } from "react";

import { HoverDetector } from "components/common/utils/hoverDetector";
import { SkillResource } from "utils/resourceTypes/skills";
import { InsideStar } from "components/skills/atom/insideSide";
import { ShrinkedStar } from "components/skills/atom/shrinkedStar";

type _Props = {
    resource: SkillResource,
}

export const SkillCard = (props: _Props) => {
    const [hovered, setHovered] = useState(false);

    if (hovered)
        return <HoverDetector dispatcher={setHovered}>
            <InsideStar expanded={hovered}>
            </InsideStar>
        </HoverDetector>;

    return <HoverDetector dispatcher={setHovered}>
        <ShrinkedStar>
        </ShrinkedStar>
    </HoverDetector>;
}
