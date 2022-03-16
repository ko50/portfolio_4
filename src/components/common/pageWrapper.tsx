import React from "react";

import { Background } from "components/common/bg/background";
import { Header } from "components/common/header/header";
import { SectionButtonList } from "components/common/section_button/sectionButtonList";
import { Provider } from "utils/context";
import { APIResource } from "utils/resourceTypes/base";
import { useLocation } from "react-router-dom";
import { adapters } from "api/setup";


type _Props = {
    children: React.ReactNode
}

export function PageWrapper(props: _Props) {
    let loading: boolean = true;
    let data: APIResource[] = [];

    const route: string = useLocation().pathname;
    if (route !== "/") {
        const adapter = adapters.get(route)!;
        console.log(adapter.path);

        adapter.getResources().then((res) => {
            loading = false;
            data = res;
        });
    }

    return <Provider value={{ loading: loading, data: data }}>
        <Background>
            <Header />
            <SectionButtonList />
            <span className="h-4" />
            <div>{props.children}</div>
        </Background>
    </Provider>;
}
