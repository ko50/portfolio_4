import React from "react";

import { Background } from "components/common/bg/bg";
import { Header } from "components/common/header/header";
import { SectionButtonList } from "components/common/section_button/section_button_list";


type _Props = {
    children: React.ReactNode
}

export function PageWrapper(props: _Props) {
    return <Background>
        <Header />
        <SectionButtonList />
        <span className="h-4" />
        <div>{props.children}</div>
    </Background>;
}
