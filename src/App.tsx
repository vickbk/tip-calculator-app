import logo from "@/assets/logo.svg";
import "@/styles/global.css";
import "@/styles/scss/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Heading, Main } from "./components/shared/heading-managers";
import { HeadingCtx } from "./contexts/HeadingCtx";

function App() {
  return (
    <HeadingCtx value={0}>
      <header>
        <img src={logo} alt="" />
        <Heading className="sr-only">Tip Calculator App</Heading>
      </header>
      <Main pageHasH1>the Calculator will be here</Main>
    </HeadingCtx>
  );
}

export default App;
