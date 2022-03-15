import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Top() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.top.name}</div>
            <div>{routes.top.path}</div>
        </div>
    </PageWrapper>;
}
