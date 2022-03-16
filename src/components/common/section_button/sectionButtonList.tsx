import { SectionButton } from "components/common/section_button/sectionButton"
import { sectionRouteList } from "config/routes";

export function SectionButtonList() {
    return <div className="p-1">
        <div className="w-100 flex justify-center">
            {sectionRouteList.map((v) => <SectionButton key={v.name} route={v} />)}
        </div>
    </div>;
}
