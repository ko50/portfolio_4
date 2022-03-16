import React from "react";

import { Background } from "components/common/bg/background";
import { Header } from "components/common/header/header";
import { SectionButtonList } from "components/common/section_button/sectionButtonList";


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
