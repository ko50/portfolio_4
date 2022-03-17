import React, { useEffect, useState } from "react";

import { Background } from "components/common/background/background";
import { Header } from "components/common/header/header";
import { SectionButtonList } from "components/common/section_button/sectionButtonList";
import { Provider, SiteState } from "utils/context";
import { useLocation } from "react-router-dom";
import { adapters } from "api/setup";


type _Props = {
    children: React.ReactNode
}

export const PageWrapper = (props: _Props) => {
    const [value, setValue] = useState<SiteState>({ loading: true, data: [] });

    const route: string = useLocation().pathname;
    useEffect(() => {
        if (route === "/") return;

        const adapter = adapters.get(route)!;
        console.log(adapter.path);

        (async () => {
            const res = await adapter.getResources();
            console.log(res);

            const loading = false;
            const data = res;
            setValue({ loading: loading, data: data });
        })();
    }, []);

    return <Provider value={value}>
        <Background>
            <Header />
            <SectionButtonList />
            <span className="h-4" />
            <div>{props.children}</div>
        </Background>
    </Provider>;
}
