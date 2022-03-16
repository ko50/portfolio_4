import { PageWrapper } from "components/common/pageWrapper";
import { routes } from "config/routes";

export function Skills() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.skills.name}</div>
            <div>{routes.skills.path}</div>
        </div>
    </PageWrapper>;
}
