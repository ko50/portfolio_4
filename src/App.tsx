import { Background } from "./components/common/bg/bg";
import { Header } from "./components/common/header/header";
import { SectionButtonList } from "./components/common/section_button/section_button_list";

function App() {
  return (
    <Background>
      <Header />
      <SectionButtonList names={["About Me", "Skills", "Works", "Contacts"]} />
    </Background>
  );
}

export default App;
