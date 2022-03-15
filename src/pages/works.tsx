import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Works() {
    return <PageWrapper>
        <div>{routes.works.name}</div>
        <div>{routes.works.path}</div>
    </PageWrapper>;
}
