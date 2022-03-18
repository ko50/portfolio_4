import { useState } from "react";

import { WorkResource } from "utils/resourceTypes/works";
import { Screenshot } from "components/works/components/screenshot";
import { Information } from "components/works/components/information";
import { A } from "components/common/utils/a";
import { HoverDetector } from "components/common/utils/hoverDetector";
import { EnhanceCover } from "components/works/components/enhanceCover";
import { HoveredText } from "./components/hoveredText";

type _Props = {
    resource: WorkResource,
}

export const WorkCard = (props: _Props) => {
    const [hovered, setHovered] = useState(false);

    return <A href={props.resource.link}>
        <HoverDetector dispatcher={setHovered}>
            <div className="relative">
                <EnhanceCover hovered={hovered} />
                <HoveredText
                    name={props.resource.name}
                    description={props.resource.description}
                    tags={props.resource.tags}
                    hovered={hovered}
                />
                <div className="bg-ocean rounded p-5 max-w-2xl">
                    <Screenshot screenshot={props.resource.screenshot} />
                    <Information
                        name={props.resource.name}
                        description={props.resource.description}
                        tags={props.resource.tags}
                    // hovered={hovered}
                    />
                </div>
            </div>
        </HoverDetector>
    </A>;
}

// 白い部分は同じ要素を別途構築してホバー時にz-indexで制御しつつスライドイン/スケールインさせる
