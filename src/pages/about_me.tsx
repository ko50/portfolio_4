import { PageWrapper } from "components/common/page_wrapper";
import { routes } from "config/routes";

export function AboutMe() {
    return <PageWrapper>
        <div className="text-white font-zcool p-6 items-center">
            <div>{routes.about_me.name}</div>
            <div>{routes.about_me.path}</div>
        </div>
    </PageWrapper>;
}
