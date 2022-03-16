import { PageWrapper } from "components/common/pageWrapper";
import { routes } from "utils/routes";

export function Top() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.top.name}</div>
            <div>{routes.top.path}</div>
        </div>
    </PageWrapper>;
}
