import { PageWrapper } from "components/common/pageWrapper";
import { routes } from "utils/routes";

export const Contacts = () => {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.contacts.name}</div>
            <div>{routes.contacts.path}</div>
        </div>
    </PageWrapper>;
}
