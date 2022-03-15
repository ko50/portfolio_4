import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Skills() {
    return <PageWrapper>
        <div>{routes.skills.name}</div>
        <div>{routes.skills.path}</div>
    </PageWrapper>;
}
