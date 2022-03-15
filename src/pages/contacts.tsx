import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function Contacts() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.contacts.name}</div>
            <div>{routes.contacts.path}</div>
        </div>
    </PageWrapper>;
}
