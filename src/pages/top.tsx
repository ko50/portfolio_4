import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Top() {
    return <PageWrapper>
        <div>{routes.top.name}</div>
        <div>{routes.top.path}</div>
    </PageWrapper>;
}
