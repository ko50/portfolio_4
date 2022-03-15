import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Contacts() {
    return <PageWrapper>
        <div>{routes.contacts.name}</div>
        <div>{routes.contacts.path}</div>
    </PageWrapper>;
}
