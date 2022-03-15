import { Background } from "components/common/bg/bg";
import { Header } from "components/common/header/header";
import { SectionButtonList } from "components/common/section_button/section_button_list";


type _Props = {
    children: JSX.Element[]
}

export function PageWrapper(props: _Props = { children: [] }) {
    return <Background>
        <Header />
        <SectionButtonList names={["About Me", "Skills", "Works", "Contacts"]} />
        <span className="h-4" />
        <div>
            {props.children}
        </div>
    </Background>;
}
