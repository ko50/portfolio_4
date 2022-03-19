import { useState } from "react";

import { HoverDetector } from "components/common/utils/hoverDetector";
import { SkillResource } from "utils/resourceTypes/skills";
import { InsideStar } from "components/skills/atom/insideStar";
import { OutsideStar } from "components/skills/atom/outsideStar";

type _Props = {
    resource: SkillResource,
}

export const SkillCard = (props: _Props) => {
    const [hovered, setHovered] = useState(false);

    return <HoverDetector dispatcher={setHovered}>
        <OutsideStar>
            <InsideStar expanded={hovered}>

            </InsideStar>
        </OutsideStar>
    </HoverDetector>;
}
