import { EnhanceCover } from "components/works/atom/enhanceCover";

type _Props = {
    hovered: boolean,
}

export const HoveredCover = (props: _Props) => {
    return <div className="w-full h-40 absolute bottom-0">
        <EnhanceCover hovered={props.hovered} />
    </div>;
}
