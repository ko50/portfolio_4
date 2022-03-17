import { WorkResource } from "utils/resourceTypes/works";
import { Screenshot } from "components/works/components/screenshot";
import { Information } from "./components/information";
import { A } from "components/common/utils/a";

type _Props = {
    resource: WorkResource,
}

export const WorkCard = (props: _Props) => {
    return <A href={props.resource.link}>
        <div className="bg-ocean rounded p-5 max-w-2xl">
            <Screenshot screenshot={props.resource.screenshot} />
            <Information name={props.resource.name} description={props.resource.description} tags={props.resource.tags} />
        </div>
    </A>;
}

// 白い部分は同じ要素を別途構築してホバー時にz-indexで制御しつつスライドイン/スケールインさせる
