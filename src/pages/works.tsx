import { PageWrapper } from "components/common/pageWrapper";
import { routes } from "utils/routes";

export function Works() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.works.name}</div>
            <div>{routes.works.path}</div>
        </div>
    </PageWrapper>;
}
