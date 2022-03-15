import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Works() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.works.name}</div>
            <div>{routes.works.path}</div>
        </div>
    </PageWrapper>;
}
