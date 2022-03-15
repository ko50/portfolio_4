import { SectionButton } from "components/common/section_button/section_button"
import { sectionRouteList } from "config/routes";

export function SectionButtonList() {
    return <div className="p-1">
        <div className="w-100 flex justify-center">
            {sectionRouteList.map((v) => <SectionButton route={v} />)}
        </div>
    </div>;
}
