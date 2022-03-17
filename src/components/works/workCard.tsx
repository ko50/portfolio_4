import { WorkResource } from "utils/resourceTypes/works";

type _Props = {
    resource: WorkResource,
}

export function WorkCard(props: _Props) {
    return <a href={props.resource.link} target="_blank" rel="noopener noreferrer">
        <div className="bg-ocean rounded p-5 max-w-2xl">
            <div className="relative w-full">
                <img className="h-80 w-full object-cover" src={props.resource.screenshot} />
                <span className="w-full absolute border-b-[3px] bottom-[7px] border-ocean" />
                <span className="w-full absolute border-b-4 bottom-px border-ocean" />
            </div>
            <div className="flex items-start pt-4">
                <span className="text-star text-4xl">★</span>
                <span className="w-1" />
                <div className="block">
                    <div className="font-zcool text-white text-4xl">
                        {props.resource.name}
                        <span className="text-grey text-base"> ...{props.resource.tags.join()}</span>
                    </div>
                    <div className="text-white font-maru text-base">{props.resource.description}</div>
                </div>
            </div>
        </div>
    </a>;
}

// 白い部分は同じ要素を別途構築してホバー時にz-indexで制御しつつスライドイン/スケールインさせる
